import { gql } from '@apollo/client';

const GET_CAKES = gql`
    query GetCakes {
        cakes {
            description
            id
            image
            title
        }
    }
`

export default GET_CAKES