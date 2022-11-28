/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
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
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
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
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUserReaction = /* GraphQL */ `
  mutation CreateUserReaction(
    $input: CreateUserReactionInput!
    $condition: ModelUserReactionConditionInput
  ) {
    createUserReaction(input: $input, condition: $condition) {
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
export const updateUserReaction = /* GraphQL */ `
  mutation UpdateUserReaction(
    $input: UpdateUserReactionInput!
    $condition: ModelUserReactionConditionInput
  ) {
    updateUserReaction(input: $input, condition: $condition) {
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
export const deleteUserReaction = /* GraphQL */ `
  mutation DeleteUserReaction(
    $input: DeleteUserReactionInput!
    $condition: ModelUserReactionConditionInput
  ) {
    deleteUserReaction(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createCommentReaction = /* GraphQL */ `
  mutation CreateCommentReaction(
    $input: CreateCommentReactionInput!
    $condition: ModelCommentReactionConditionInput
  ) {
    createCommentReaction(input: $input, condition: $condition) {
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
export const updateCommentReaction = /* GraphQL */ `
  mutation UpdateCommentReaction(
    $input: UpdateCommentReactionInput!
    $condition: ModelCommentReactionConditionInput
  ) {
    updateCommentReaction(input: $input, condition: $condition) {
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
export const deleteCommentReaction = /* GraphQL */ `
  mutation DeleteCommentReaction(
    $input: DeleteCommentReactionInput!
    $condition: ModelCommentReactionConditionInput
  ) {
    deleteCommentReaction(input: $input, condition: $condition) {
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
export const createCommentReply = /* GraphQL */ `
  mutation CreateCommentReply(
    $input: CreateCommentReplyInput!
    $condition: ModelCommentReplyConditionInput
  ) {
    createCommentReply(input: $input, condition: $condition) {
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
export const updateCommentReply = /* GraphQL */ `
  mutation UpdateCommentReply(
    $input: UpdateCommentReplyInput!
    $condition: ModelCommentReplyConditionInput
  ) {
    updateCommentReply(input: $input, condition: $condition) {
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
export const deleteCommentReply = /* GraphQL */ `
  mutation DeleteCommentReply(
    $input: DeleteCommentReplyInput!
    $condition: ModelCommentReplyConditionInput
  ) {
    deleteCommentReply(input: $input, condition: $condition) {
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
export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
