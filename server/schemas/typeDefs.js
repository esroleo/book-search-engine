// type definition

// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our typeDefs
// look up thoughts by specific username
// we can use the username parameter if we wanted
// reactions: [Reaction] is nested inside thought as an array
const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
       
    }


`;


// export the typeDefs
module.exports = typeDefs;