import { gql } from '@apollo/client';

export const QUERY_STORIES = gql`
  query getStories {
    stories {
      _id
      title
      storyText
      createdAt
    }
  }
`;
