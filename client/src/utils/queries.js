import gql from 'graphql-tag';

//  {
//   me {
//     _id
//     username
//     email
//     bookCount
//     savedBooks {
//       bookId
//       authors
//       description
//       image
//       link
//       title
//     }
//   }
// }
// `;




export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
