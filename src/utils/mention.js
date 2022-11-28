import { EU } from 'react-native-mention-editor';

export const pickUserName = (mentionString) => {
  const firstIndex = mentionString.indexOf('[');
  const endIndex = mentionString.indexOf(']');
  return `@${mentionString.substring(firstIndex + 1, endIndex)}`;
};

export const getMentions = (mentionString) => {
  let mentionIDs = [];
  const retLines = mentionString.split('\n');
  retLines.forEach((retLine, rowIndex) => {
    const mentions = EU.findMentions(retLine);
    mentions.forEach(async (mention) => {
      const id = mention.undefined;
      mentionIDs.push(id);
    });
  });
  return mentionIDs;
};
