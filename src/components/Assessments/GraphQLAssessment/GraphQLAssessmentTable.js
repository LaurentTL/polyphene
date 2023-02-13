import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_CAKES = gql`
query GetCakes {
    cakes {
        description
        id
        image
        title
    }
}`

export default function GraphQLAssessmentTable() {

    const { loading, error, data } = useQuery(GET_CAKES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
    };

    return (
        <>
        <input 
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a cake"
        />
        <table id="reduxAssessmentTable" className='min-w-[400px] max-w-[550px]'>
            <thead>
            <tr>
                <th className='bg-blue-400 text-white text-center border border-solid border-white'>Cake</th>
                <th className='bg-blue-400 text-white text-center border border-solid border-white'>Description</th>
                <th className='bg-blue-400 text-white text-center border border-solid border-white'>Preview</th>
            </tr>
            </thead>
            <tbody>
            {
                data.cakes
                .filter(cake => 
                    Object.values(cake).join('').toLowerCase().includes(search.toLowerCase())
                )
                .map(cake => 
                    <tr 
                        className={ cake.id % 2 === 0 ? `${ 'bg-blue-200' }` : {} }
                        key={cake.id}
                    >
                        <td className='w-1/4'>{cake.title}</td>
                        <td>{cake.description}</td>
                        <td className='w-1/4'>
                            <img src={cake.image} alt={cake.title} className="aspect-auto" />
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </>
    );
}
