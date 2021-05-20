import { mergeTypeDefs } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';
import path from 'path'

// load all the schemas inside the modules folder
const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'))

// merge the schemas into a single executable schema
const typeDefs = mergeTypeDefs(typesArray)


export default typeDefs