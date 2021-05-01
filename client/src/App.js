import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// Connection to graphQL server using apollo
// before react app team created fix
// const client = new ApolloClient({
//   uri: 'http://localhost:3001/graphql'
// });
// after react team created fix
const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      // populates the header session that will talk to apollo
      headers: { //if token availalble set to Bearer x if not blank 
        // '' or blank means not authenticated
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  // this is seetting the enviroment to development as it is a 
  // relative path?
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
    </ApolloProvider>
  );
}

export default App;
