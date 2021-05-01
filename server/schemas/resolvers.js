const { User, Book } = require('../models');
// graphSQL error handling definition
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

        // authentication method for middleware
        /* before adding the context user middleware auth function
        me: async (parent, args) => {
            const userData = await User.findOne({})
              .select('-__v -password')
              .populate('thoughts')
              .populate('friends');
        
            return userData;
            */
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id })
              .select('-__v -password')
              .populate('book')
            return userData;
          }
        
          throw new AuthenticationError('Not logged in');
        },
        // get all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('book')
        },
        // get a user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v -password')
            .populate('book')
        },
    },
    Mutation: {
        // login resolver uses the authentication import
        // AuthenticationError
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          }
    }
  };
  
module.exports = resolvers;