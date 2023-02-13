import React from 'react';
import {gql, useMutation, useQuery} from "@apollo/client";

const GET_COUNTER = gql`
    query GetCounter {
        counter {
            count
        }
    }
`;

const INCREMENT_COUNTER = gql`
    # Increments a back-end counter and gets its resulting value
    mutation IncrementCounter {
        increment {
            count
        }
    }
`;

export default function CounterExample() {
    const {loading: queryLoading, error: errorLoading, data: queryData} = useQuery(GET_COUNTER);
    const [increment, { data: mutationData }] = useMutation(INCREMENT_COUNTER);

    if (queryLoading) return <p>Loading...</p>;

    if (errorLoading) {
        return <p>Could not get counter: {errorLoading.message}</p>
    }

    return (
        <div className="flex">
            <p>Counter Example: {mutationData?.increment.count ?? queryData.counter.count}</p>
            <button type="button" onClick={() => increment()} className="ml-4 inline-block px-3 py-1 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Increment</button>
        </div>
    );

}