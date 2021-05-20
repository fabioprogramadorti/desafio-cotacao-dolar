import 'dotenv/config'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import { dbInit } from './db/connection'

// connect to the database
dbInit()

// load all resolvers and typeDefs into the server
const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))