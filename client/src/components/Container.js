import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
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
                <div>
                    <Routes>
                        <Route path="/">
                            <Homepage />
                        </Route>
                        <Route path="/profile/id">
                            <Profile />
                        </Route>
                        <Route path="/search">
                            <Search />
                        </Route>
                        <Route path="/view/:id">
                            <View />
                        </Route>
                        <Route path="/edit/:id">
                            <Edit />
                        </Route>
                        <Route path="/signin">
                            <SignIn />
                        </Route>
                        <Route path="/signup">
                            <SignUp />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default Container;