import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Homepage from './pages/homepage/homepage';
import Profile from './pages/profile/profile';
import Search from './pages/search/search';
import View from './pages/viewerStories/viewerStories';
import Edit from './pages/editorStories/editorStories';
import SignIn from './pages/signin/signin';
import SignUp from './pages/signup/signup';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function Container () {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <div>
                        <Route exact path="/" component={Homepage} />
                        <Route exact path="/profile/id" component={Profile}/>
                        <Route exact path="/search" component={Search}/>
                        <Route exact path="/view/:id" component={View}/>
                        <Route exact path="/edit/:id" component={Edit}/>
                        <Route exact path="/signin" component={SignIn}/>
                        <Route exact path="/signup" component={SignUp}/>
                    </div>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default Container;