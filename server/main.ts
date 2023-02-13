import {makeExecutableSchema} from "@graphql-tools/schema";
import {createYoga} from 'graphql-yoga'
import {createServer} from 'http'
import type {Cake, Counter} from "@prisma/client"
import {PrismaClient} from '@prisma/client'


/*************************************
 * DB & Context
 *************************************/

const prisma = new PrismaClient()

type GraphQLContext = {
    prisma: PrismaClient
}

function createContext(): GraphQLContext {
    return { prisma }
}

const typeDefinitions = /* GraphQL */ `
    type Cake {
        id: ID!
        title: String!
        description: String!
        image: String!
    }

    type Counter {
        id: ID!
        count: Int!
    }

    type Query {
        cakes: [Cake!]!
        counter: Counter!
    }

    type Mutation {
        increment: Counter!
    }
`

const resolvers = {
    Cake: {
        id: (parent: Cake) => parent.id,
        title: (parent: Cake) => parent.title,
        description: (parent: Cake) => parent.description,
        image: (parent: Cake) => parent.image
    },
    Counter: {
        id: (parent: Counter) => parent.id,
        count: (parent: Counter) => parent.count
    },
    Query: {
        cakes: (parent: unknown, args: {}, context: GraphQLContext) => context.prisma.cake.findMany(),
        counter: async (parent: unknown, args: {}, context: GraphQLContext) => context.prisma.counter.findUnique({where: {id: 1}})
    },
    Mutation: {
        async increment(
            parent: unknown,
            args: { description: string; url: string },
            context: GraphQLContext
        ) {
            const currentCounter = await context.prisma.counter.findUnique({ where: { id: 1 }});
            let newValue = 0;
            if(currentCounter !== null) {
                newValue = currentCounter.count + 1
            }
            return context.prisma.counter.update({
                where: {
                    id: 1,
                },
                data: {
                    count: newValue,
                },
            });
        }
    }
}

const schema = makeExecutableSchema({
    resolvers: [resolvers],
    typeDefs: [typeDefinitions]
})

function main() {
    const yoga = createYoga({ schema, context: createContext })
    const server = createServer(yoga)
    server.listen(4000, () => {
        console.info('Server is running on http://localhost:4000/graphql')
    })
}

main()