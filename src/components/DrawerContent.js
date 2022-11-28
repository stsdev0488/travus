import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from 'react-native-elements';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import Avatar from 'components/Avatar';
import { Colors, Images } from 'config';
import { scaleH, scaleW } from 'utils/scale';
import { AuthActions } from 'reduxs/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: scaleW(20),
    paddingTop: scaleH(20),
  },
  headerContainer: {
    borderWidth: 1,
    borderColor: 'rgba(228, 228, 228, 0.6)',
    flexDirection: 'row',
    paddingVertical: scaleH(4),
    paddingHorizontal: scaleW(8),
    borderRadius: scaleH(5),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaleH(15),
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: scaleH(15),
    lineHeight: scaleH(18),
    color: Colors.label,
    marginLeft: scaleW(10),
  },
  listItemContainer: {
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(228, 228, 228, 0.2)',
  },
  leftElement: {
    width: scaleW(25),
    marginRight: scaleW(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    fontSize: scaleH(15),
    lineHeight: scaleH(18),
    color: '#666666',
  },
});

const DrawerContent = (props) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Avatar
              image={
                profile.image ? { uri: profile.image } : Images.defaultAvatar
              }
            />
            <Text style={styles.name}>{profile.name}</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <SimpleLineIcon
              name="arrow-left"
              size={scaleH(15)}
              color={Colors.reactionLabel}
            />
          </TouchableOpacity>
        </View>
        <ListItem
          containerStyle={styles.listItemContainer}
          leftElement={
            <View style={styles.leftElement}>
              <FeatherIcon name="search" color="#666666" size={scaleH(22)} />
            </View>
          }
          title="Search"
          titleStyle={styles.actionTitle}
          onPress={() => props.navigation.navigate('Home')}
          pad={0}
        />
        <ListItem
          containerStyle={styles.listItemContainer}
          leftElement={
            <View style={styles.leftElement}>
              <FeatherIcon name="user" color="#666666" size={scaleH(22)} />
            </View>
          }
          title="Account"
          titleStyle={styles.actionTitle}
          onPress={() => props.navigation.navigate('ProfileDrawer')}
          pad={0}
        />
        <ListItem
          containerStyle={styles.listItemContainer}
          leftElement={
            <View
              style={[
                styles.leftElement,
                { transform: [{ rotateY: '180deg' }] },
              ]}
            >
              <SimpleLineIcon name="logout" color="#666666" size={scaleH(20)} />
            </View>
          }
          title="Log Out"
          titleStyle={styles.actionTitle}
          onPress={() => dispatch(AuthActions.logout())}
          pad={0}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
