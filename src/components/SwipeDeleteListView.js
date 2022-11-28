import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { Colors, Constants } from 'config';
import { scaleH } from 'utils/scale';

const SwipeDeleteListView = ({ data, renderItem }) => {
  const [listData, setListData] = useState(
    data.map((item, index) => ({ key: `${index}`, ...item })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}
      >
        <Icon
          name="trash"
          color={Colors.primary}
          size={scaleH(20)}
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SwipeListView
      disableRightSwipe
      data={listData}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      leftOpenValue={75}
      rightOpenValue={-60}
      previewRowKey={'0'}
      previewOpenValue={-40}
      previewOpenDelay={3000}
    />
  );
};

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 45,
  },
  backRightBtnRight: {
    backgroundColor: 'transparent',
    right: 0,
  },
});

SwipeDeleteListView.defaultProps = {
  data: [],
};

SwipeDeleteListView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any),
  renderItem: PropTypes.func.isRequired,
};

export default SwipeDeleteListView;
