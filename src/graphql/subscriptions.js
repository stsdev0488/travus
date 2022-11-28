/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUserReaction = /* GraphQL */ `
  subscription OnCreateUserReaction {
    onCreateUserReaction {
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
export const onUpdateUserReaction = /* GraphQL */ `
  subscription OnUpdateUserReaction {
    onUpdateUserReaction {
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
export const onDeleteUserReaction = /* GraphQL */ `
  subscription OnDeleteUserReaction {
    onDeleteUserReaction {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateCommentReaction = /* GraphQL */ `
  subscription OnCreateCommentReaction {
    onCreateCommentReaction {
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
export const onUpdateCommentReaction = /* GraphQL */ `
  subscription OnUpdateCommentReaction {
    onUpdateCommentReaction {
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
export const onDeleteCommentReaction = /* GraphQL */ `
  subscription OnDeleteCommentReaction {
    onDeleteCommentReaction {
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
export const onCreateCommentReply = /* GraphQL */ `
  subscription OnCreateCommentReply {
    onCreateCommentReply {
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
export const onUpdateCommentReply = /* GraphQL */ `
  subscription OnUpdateCommentReply {
    onUpdateCommentReply {
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
export const onDeleteCommentReply = /* GraphQL */ `
  subscription OnDeleteCommentReply {
    onDeleteCommentReply {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
