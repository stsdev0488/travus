export const getReactions = (reactionData, commentData) => {
  let likes = 0,
    dislikes = 0,
    flags = 0,
    comments = 0,
    hearts = 0;
  reactionData.forEach((item) => {
    if (item.reactionType === 'LIKE') {
      likes += 1;
    } else if (item.reactionType === 'DISLIKE') {
      dislikes += 1;
    } else if (item.reactionType === 'HEART') {
      hearts += 1;
    } else if (item.reactionType === 'FLAG') {
      flags += 1;
    }
  });
  comments = commentData.length;

  return [
    {
      type: 'like',
      count: likes,
    },
    {
      type: 'dislike',
      count: dislikes,
    },
    {
      type: 'heart',
      count: hearts,
    },
    {
      type: 'flag',
      count: flags,
    },
    {
      type: 'comment',
      count: comments,
    },
  ];
};
