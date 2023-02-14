import { useState } from 'react';
import { useQuery } from '@apollo/client';
import GET_CAKES from '../../../graphql/query/query';

export default function GraphQLAssessmentTable() {

    const [search, setSearch] = useState('');

    const handleSearch = (searchValue) => {
        setSearch(searchValue);
    };

    const { loading, error, data } = useQuery(GET_CAKES);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


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
                .map((cake, index) => 
                    <tr 
                        className={ `h-[140px] ${index % 2 === 0 ? `${ 'bg-blue-200' }` : {} }` }
                        key={cake.id}
                    >
                        <td className='w-1/4 border border-solid border-gray-200 text-center p-3'>{cake.title}</td>
                        <td className='border border-solid border-gray-200 text-center p-3'>{cake.description}</td>
                        <td className='w-1/4 border border-solid border-gray-200' style={{backgroundImage: `url(${cake.image})`}}>
                            {/* <img src={cake.image} alt={cake.title} className="aspect-auto" /> */}
                        </td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </>
    );
}
