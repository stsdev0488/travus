import React from 'react';
import { StyleSheet, View } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import PostUser from 'components/PostItem/PostUser';
import Reaction from 'components/Reaction';
import Replies from 'components/PostItem/Replies';
import { Colors, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { getTimeDiff } from 'utils/timediff';
import {pickUserName} from "utils/mention";

const styles = StyleSheet.create({
  container: {
    paddingVertical: scaleH(13),
    paddingHorizontal: scaleW(13),
    marginBottom: scaleH(8),
  },
  reactionContainer: {
    marginTop: scaleH(5),
    marginLeft: scaleW(40),
  },
  comment: {
    fontSize: scaleH(15),
    lineHeight: scaleH(20),
    letterSpacing: -0.24,
    color: Colors.label,
    marginVertical: scaleH(12),
  },
  businessName: {
    fontSize: scaleH(15),
    lineHeight: scaleH(20),
    letterSpacing: -0.24,
    color: Colors.primary,
    fontWeight: '800',
  },
});

const ProfilePostItem = ({ data, reactions, handleBusinessPress }) => {
  const renderMention = (matchingString, matches) => {
    return pickUserName(matchingString);
  };

  return (
    <View style={styles.container}>
      <PostUser
        image={
          !data.user ? Images.defaultAvatar : { uri: data.user.image || null }
        }
        name={data.user?.name || ''}
        time={
          data.createdAt
            ? `${getTimeDiff(new Date(data.createdAt), new Date())} ago`
            : ''
        }
      />
      <View style={styles.reactionContainer}>
        <Reaction data={reactions} userReaction={() => {}} />
      </View>
      <View style={{ marginLeft: scaleW(25) }}>
        <ParsedText
          style={styles.comment}
          parse={[
            {
              pattern: /@\[([^\]]+?)\]\(id:([^\]]+?)\)/gim,
              renderText: renderMention,
              style: styles.businessName,
              onPress: handleBusinessPress,
            },
          ]}
        >
          {data.message || ''}
        </ParsedText>
        <Replies replies={data.comments?.items || []} />
      </View>
    </View>
  );
};

export default ProfilePostItem;
