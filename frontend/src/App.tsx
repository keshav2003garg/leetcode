import React from 'react';
import store, { persistor } from './store';
import { ApolloProvider } from '@apollo/client/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from './routes/Router';
import client from './apollo/client';

interface AppProps {}

export const App: React.FC<AppProps> = ({}) => {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        </ApolloProvider>
    );
};
