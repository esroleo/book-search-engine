import gql from 'graphql-tag';


export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      savedBooks {
        _id
        authors
        description
        image
        link
        title
      }
    }
  }
`;
