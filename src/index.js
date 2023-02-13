import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import App from './App';

const root = createRoot(document.getElementById("root"));

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
});

root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
);
