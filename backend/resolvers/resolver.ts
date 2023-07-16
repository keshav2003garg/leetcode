import { mergeResolvers } from '@graphql-tools/merge';

import test from './test.resolver';

const resolvers = mergeResolvers([test]);

export default resolvers;
