// type definition

// import the gql tagged template function
const { gql } = require('apollo-server-express');


// create our typeDefs
// look up thoughts by specific username
// we can use the username parameter if we wanted
// reactions: [Reaction] is nested inside thought as an array
//saveBoo(authors: String!, description: String!, title: String!, bookId: String!, image: String!, link: String!): Book
// type Book {
//     _id: ID
//     bookId: String
//     authors: String
//     description: String
//     title: String
//     image: String
//     link: String
// }

// _id: ID
//bookId
//saveBook(authors: String!, description: String!, bookId: String!, image: String, link: String, title: String!): Book

const typeDefs = gql`

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: ID
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
       
    }

    input AuthorInput {
        authors: String
    }

    input BookInput {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookInput: BookInput): User
        removeBook(bookId: ID!): User
    }

    type Auth {
        token: ID!
        user: User
    }


`;


// export the typeDefs
module.exports = typeDefs;