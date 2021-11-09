import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Homepage from './components/pages/homepage/homepage';
import Profile from './components/pages/profile/profile';
import Search from './components/pages/search/search';
import View from './components/pages/viewerStories/viewerStories';
import Edit from './components/pages/editorStories/editorStories';
import SignIn from './components/pages/signin/signin';
import SignUp from './components/pages/signup/signup';

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

function App () {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Navbar />
                    <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Homepage />}></Route>
                            <Route exact path="/profile" element={<Profile />}></Route>
                            <Route exact path="/search" element={<Search />}></Route>
                            <Route exact path="/view" element={<View />}></Route>
                            <Route exact path="/edit" element={<Edit />}></Route>
                            <Route exact path="/signin" element={<SignIn />}></Route>
                            <Route exact path="/signup" element={<SignUp />}></Route>
                        </Routes>
                    </div>
                    <Footer />
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;