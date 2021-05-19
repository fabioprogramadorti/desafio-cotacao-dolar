import 'dotenv/config'
import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
import { dbInit } from './db/connection'


dbInit()

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))