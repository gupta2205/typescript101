const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors')

const PORT = 3600;

//Fake Data
const authors = [
    {
        id: "1",
        info: {
          name: "John Doe",
          age: 32,
          gender: "M",   
        }
    }
];

const typeDefs = `
    type Author {
        id: ID!
        info: Person
    }
    type Person {
        name: String!
        age: Int
        gender: String
    }
    type Query {
        getAuthors: [ Author ]
    }
`;

const resolvers = {
    Query: {
       getAuthors: () => authors,
    }       
};

const app = express();
app.use(cors());

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({
    app,
    path: '/graphql'
});

app.listen(PORT, () => {
  console.log(`Server ready at ${PORT} ${server.graphqlPath}`);
});