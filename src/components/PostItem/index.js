import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import PropTypes from 'prop-types';
import TagList from 'components/PostItem/TagList';
import PostUser from 'components/PostItem/PostUser';
import PostImageList from 'components/PostItem/PostImageList';
import Reaction from 'components/Reaction';
import { Colors } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { getTimeDiff } from 'utils/timediff';
import { pickUserName } from 'utils/mention';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: scaleH(14),
    paddingVertical: scaleH(13),
    paddingHorizontal: scaleW(13),
    marginBottom: scaleH(8),
  },
  reactionContainer: {
    marginTop: scaleH(5),
    marginLeft: scaleW(10),
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

const PostItem = ({
  data,
  onPress,
  navigation,
  onImagePress,
  reactions,
  userReaction,
  onBusinessPress,
}) => {
  const renderMention = (matchingString, matches) => {
    return pickUserName(matchingString);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <PostUser
        image={{ uri: data.user?.image || null }}
        name={data.user?.name || ''}
        time={
          data.createdAt
            ? `${getTimeDiff(new Date(data.createdAt), new Date())} ago`
            : ''
        }
      />
      <View style={styles.reactionContainer}>
        <Reaction data={reactions} userReaction={userReaction} />
      </View>
      <TagList tagList={data.businessList} />
      <ParsedText
        style={styles.comment}
        parse={[
          {
            pattern: /@\[([^\]]+?)\]\(id:([^\]]+?)\)/gim,
            renderText: renderMention,
            style: styles.businessName,
            onPress: onBusinessPress,
          },
        ]}
      >
        {data.message}
      </ParsedText>
      <PostImageList
        images={data.medias?.map((media) => ({ uri: media }))}
        onImagePress={onImagePress}
      />
    </TouchableOpacity>
  );
};

PostItem.defaultProps = {
  onPress: () => {},
  onImagePress: () => {},
  onBusinessPress: () => {},
};

PostItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func,
  onImagePress: PropTypes.func,
  onBusinessPress: PropTypes.func,
};

export default PostItem;
