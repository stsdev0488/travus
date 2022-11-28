/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      phone
      email
      location
      image
      posts {
        items {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        nextToken
      }
      userReactions {
        items {
          id
          reactionType
          reactionTarget
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      commentReactions {
        items {
          id
          reactionType
          createdAt
          updatedAt
        }
        nextToken
      }
      commentReplys {
        items {
          id
          message
          createdAt
          updatedAt
        }
        nextToken
      }
      businesses {
        items {
          id
          name
          mentionName
          description
          tags
          established
          type
          hours
          pricing
          verifiedStatus
          address
          phone
          email
          website
          ownerName
          cleanlinessScore
          safetyScore
          inclusionScore
          experienceScore
          createdAt
          updatedAt
          posts {
            items {
              medias
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      id
      name
      geo_coordinate {
        latitude
        longitude
      }
      posts {
        items {
          id
          message
          links
          tags
          medias
          business {
            id
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCitys = /* GraphQL */ `
  query ListCitys(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        geo_coordinate {
          latitude
          longitude
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      city {
        id
        name
        geo_coordinate {
          latitude
          longitude
        }
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      message
      links
      tags
      medias
      userReactions {
        items {
          id
          user {
            id
          }
          reactionType
          reactionTarget
          createdAt
          updatedAt
        }
        nextToken
      }
      comments {
        items {
          id
          message
          user {
            id
            image
            name
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      business {
        id
        name
        mentionName
        description
        tags
        established
        type
        hours
        pricing
        verifiedStatus
        reactions {
          nextToken
        }
        geocoordinates {
          latitude
          longitude
        }
        address
        phone
        email
        posts {
          nextToken
        }
        website
        ownerName
        cleanlinessScore
        safetyScore
        inclusionScore
        experienceScore
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        city {
          id
          name
          createdAt
          updatedAt
        }
        message
        links
        tags
        medias
        userReactions {
          items {
            reactionType
            user {
              id
            }
          }
        }
        comments {
          nextToken
        }
        business {
          id
          name
          mentionName
          description
          tags
          established
          type
          hours
          pricing
          verifiedStatus
          address
          phone
          email
          website
          ownerName
          cleanlinessScore
          safetyScore
          inclusionScore
          experienceScore
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserReaction = /* GraphQL */ `
  query GetUserReaction($id: ID!) {
    getUserReaction(id: $id) {
      id
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        city {
          id
          name
          createdAt
          updatedAt
        }
        message
        links
        tags
        medias
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        business {
          id
          name
          mentionName
          description
          tags
          established
          type
          hours
          pricing
          verifiedStatus
          address
          phone
          email
          website
          ownerName
          cleanlinessScore
          safetyScore
          inclusionScore
          experienceScore
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      business {
        id
        name
        mentionName
        description
        tags
        established
        type
        hours
        pricing
        verifiedStatus
        reactions {
          nextToken
        }
        geocoordinates {
          latitude
          longitude
        }
        address
        phone
        email
        posts {
          nextToken
        }
        website
        ownerName
        cleanlinessScore
        safetyScore
        inclusionScore
        experienceScore
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      reactionType
      reactionTarget
      createdAt
      updatedAt
    }
  }
`;
export const listUserReactions = /* GraphQL */ `
  query ListUserReactions(
    $filter: ModelUserReactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserReactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        post {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        business {
          id
          name
          mentionName
          description
          tags
          established
          type
          hours
          pricing
          verifiedStatus
          address
          phone
          email
          website
          ownerName
          cleanlinessScore
          safetyScore
          inclusionScore
          experienceScore
          createdAt
          updatedAt
        }
        reactionType
        reactionTarget
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      message
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      post {
        id
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        city {
          id
          name
          createdAt
          updatedAt
        }
        message
        links
        tags
        medias
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        business {
          id
          name
          mentionName
          description
          tags
          established
          type
          hours
          pricing
          verifiedStatus
          address
          phone
          email
          website
          ownerName
          cleanlinessScore
          safetyScore
          inclusionScore
          experienceScore
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      commentReactions {
        items {
          id
          reactionType
          createdAt
          updatedAt
        }
        nextToken
      }
      commentReplys {
        items {
          id
          message
          user {
            image
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        post {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentReaction = /* GraphQL */ `
  query GetCommentReaction($id: ID!) {
    getCommentReaction(id: $id) {
      id
      reactionType
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        message
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        post {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCommentReactions = /* GraphQL */ `
  query ListCommentReactions(
    $filter: ModelCommentReactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentReactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reactionType
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        comment {
          id
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommentReply = /* GraphQL */ `
  query GetCommentReply($id: ID!) {
    getCommentReply(id: $id) {
      id
      message
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      comment {
        id
        message
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        post {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCommentReplys = /* GraphQL */ `
  query ListCommentReplys(
    $filter: ModelCommentReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentReplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        comment {
          id
          message
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      name
      mentionName
      description
      tags
      established
      type
      hours
      pricing
      verifiedStatus
      reactions {
        items {
          id
          reactionType
          reactionTarget
          user {
            id
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      geocoordinates {
        latitude
        longitude
      }
      address
      phone
      email
      posts {
        items {
          id
          message
          links
          tags
          medias
          createdAt
          updatedAt
        }
        nextToken
      }
      website
      ownerName
      cleanlinessScore
      safetyScore
      inclusionScore
      experienceScore
      user {
        id
        name
        phone
        email
        location
        image
        posts {
          nextToken
        }
        userReactions {
          nextToken
        }
        comments {
          nextToken
        }
        commentReactions {
          nextToken
        }
        commentReplys {
          nextToken
        }
        businesses {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        mentionName
        description
        tags
        established
        type
        hours
        pricing
        verifiedStatus
        reactions {
          items {
            id
            reactionType
            reactionTarget
            user {
              id
            }
          }
          nextToken
        }
        geocoordinates {
          latitude
          longitude
        }
        address
        phone
        email
        posts {
          items {
            medias
          }
          nextToken
        }
        website
        ownerName
        cleanlinessScore
        safetyScore
        inclusionScore
        experienceScore
        user {
          id
          name
          phone
          email
          location
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
