import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Editor from 'react-native-mention-editor';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import AttachedMedia from 'components/AttachedMedia';
import { Colors, Constants } from 'config';
import { scaleH, scaleW } from 'utils/scale';

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: Colors.black,
    borderTopWidth: 1,
    borderTopColor: Colors.primary,
    overflow: 'hidden',
  },
  inputBar: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    borderTopLeftRadius: scaleH(5),
    borderTopRightRadius: scaleH(5),
    borderBottomColor: Colors.lightLabel,
    borderBottomWidth: 1,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaleH(60),
    backgroundColor: Colors.black,
    paddingTop: scaleH(10),
    paddingHorizontal: scaleW(10),
  },
  postButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: scaleW(10),
    paddingVertical: scaleH(3),
    borderRadius: scaleH(5),
  },
  postLabel: {
    fontSize: scaleH(15),
    fontWeight: '600',
    color: Colors.white,
  },
});

const InputBar = ({
  businesses,
  clearInput,
  onChangeHandler,
  showMentions,
  onHideMentions,
  handlePost,
  attachedMedias,
  deleteAttachedMedia,
  handleUploadImage,
  setShowMentions,
}) => {
  return (
    <View>
      <View style={styles.inputView}>
        <View style={styles.inputBar}>
          <Editor
            list={businesses}
            initialValue=""
            clearInput={clearInput}
            displayKey="name"
            extractionKey="id"
            onChange={onChangeHandler}
            showEditor={true}
            showMentions={showMentions}
            onHideMentions={onHideMentions}
            placeholder="Share your experience"
            placeholderTextColor={Colors.white}
            editorStyles={{
              mainContainer: {
                backgroundColor: Colors.black,
                width: Constants.deviceWidth,
                height: scaleH(60),
                borderWidth: 0,
                paddingLeft: scaleW(10),
                paddingTop: scaleH(5),
                zIndex: 98,
              },
              input: {
                height: scaleH(60),
                color: Colors.white,
                marginTop: scaleH(-5),
                zIndex: 99,
              },
              mentionListItemWrapper: {
                backgroundColor: Colors.black,
              },
              mentionListItemTitle: {
                marginLeft: scaleW(-50),
                color: Colors.white,
              },
            }}
          />
        </View>
        <FlatList
          horizontal
          contentContainerStyle={{ paddingHorizontal: scaleW(6) }}
          data={attachedMedias}
          renderItem={({ item, index }) => (
            <AttachedMedia
              image={item}
              onClose={() => deleteAttachedMedia(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.actionBar}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleUploadImage}>
            <Ionicons
              name="image-outline"
              color={Colors.primary}
              size={scaleH(22)}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowMentions(true)}>
            <Octicons
              name="mention"
              color={Colors.primary}
              size={scaleH(22)}
              style={{ marginLeft: scaleW(5) }}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={handlePost} style={styles.postButton}>
            <Text style={styles.postLabel}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputBar;
