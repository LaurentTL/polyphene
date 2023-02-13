import { PrismaClient } from '@prisma/client'

const fs = require('fs')

const prisma = new PrismaClient()

async function main() {
    console.log(`Start seeding ...`)
    const rawdata = fs.readFileSync(`${__dirname  }/data/cakes.json`);
    const cakes = JSON.parse(rawdata);
    const promises = cakes.map(cake => prisma.cake.create({
            data: {
                title: cake.title,
                description: cake.description,
                image: cake.image
            }
        }));
    await Promise.all(promises);

    await prisma.counter.create({
        data: {
            count: 0
        }
    })
    console.log(`Seeding finished.`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })