import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import connectDB from './database/db';

import typeDefs from './schemas/schema';
import resolvers from './resolvers/resolver';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

dotenv.config();
connectDB();
const app = express();
server.start().then(() => {
    app.use(express.json());
    app.use(cors({ origin: 'http://localhost:3000' }));
    app.use('/graphql', expressMiddleware(server));
    app.listen(process.env.PORT, () => {
        console.log('Server is running on http://localhost:4000');
    });
});
