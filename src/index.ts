import { GraphQLServer } from 'graphql-yoga'
import resolvers from './graphql/resolvers'
import typeDefs from './graphql/typeDefs'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

// const typeDefs = `
//   type Query {
//     hello(name: String): String!
//   }
// `

// const resolvers = {
//   Query: {
//     hello: (_: any, { name }: any) => `Hello ${name || 'World'}`,
//   },
// }

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))