const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Story {
        _id: ID
        author: String
        title: String
        storyText: String
        publishedAt: String
        comments: [Comment]!
    }

    type Comment {
        _id: ID
        commentAuthor: String
        commentText: String
        createdAt: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        description: String
        stories: [Story]!
        comments: [Comment]!
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        stories: [Story]!
        story(storyId: ID!): Story
        comments: [Comment]!
        comment(commentId: ID!): Comment
        user(userId: ID!): User
    }

    type Mutation {
        addStory(title: String!, author: String!, storyText: String!): Story
        addComment(storyId: ID!, commentText: String!, commentAuthor: String!): Story
        addUser(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): Auth
    }
`;

module.exports = typeDefs;