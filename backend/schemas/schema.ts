import { loadSchemaSync } from '@graphql-tools/load';
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { mergeTypeDefs } from '@graphql-tools/merge';

const typeDefs = mergeTypeDefs(
    loadSchemaSync('./schemas/*.gql', {
        loaders: [new GraphQLFileLoader()],
    }),
);

export default typeDefs;
