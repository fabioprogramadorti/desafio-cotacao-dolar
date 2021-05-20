import { mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path'

// load all the resolvers inside the modules folder
const resolversArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.ts'))

// merge the resolvers into a single executable resolver
const resolvers = mergeResolvers(resolversArray)

export default resolvers