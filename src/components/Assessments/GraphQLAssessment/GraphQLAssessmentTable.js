import React from 'react';
// import { useState } from 'react';
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

    // const [search, setSearch] = useState('');

    // const handleSearch = (searchValue) => {
    //   setSearch(searchValue);
    //   console.log(search);
    // };

    return (
        <>
        {/* <input 
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search for a cake"
        /> */}
        <table id="reduxAssessmentTable">
            <thead>
            <tr>
                <th>Type</th>
                <th>Description</th>
                <th>Image</th>
            </tr>
            </thead>
            <tbody>
            {
                data.cakes
                // .filter(val => {
                //     if (search == '') {
                //         return val;
                //     } else (val.name.toLowerCase().includes(search.toLowerCase())) {
                //         return val;
                //     }
                    
                // })
                .map(cake => 
                    <tr key={cake.id}>
                        <td>{cake.title}</td>
                        <td>{cake.description}</td>
                        <td><img src={cake.image} alt={cake.title} className="w-12 aspect-auto" /></td>
                    </tr>
                )
            }
            </tbody>
        </table>
        </>
    );
}
