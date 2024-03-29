import {  makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers'; // Will be implemented at a later stage.

const typeDefs = `
    type Channel {
      id: ID!                # "!" denotes a required field
      name: String
      messages: [Message]!
    }

    type Message {
      id: ID!
      text: String
    }
    # This type specifies the entry points into our API. 
    type Query {
      channels: [Channel]    # "[]" means this is a list of channels
      channel(id: ID!): Channel
    }

    # The mutation root type, used to define all mutations.
    type Mutation {
      # A mutation to add a new channel to the list of channels
      addChannel(name: String!): Channel
    }
    `;

const schema = makeExecutableSchema({ typeDefs, resolvers });
export { schema };