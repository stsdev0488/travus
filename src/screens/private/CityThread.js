import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { API, graphqlOperation } from 'aws-amplify';
import { getCity } from '../../graphql/queries';
import SafeAreaContainer from 'components/SafeAreaContainer';
import Header from 'components/Headers/Header';
import PostItemContainer from 'containers/PostItemContainer';
import PostBannerThreadItem from 'components/PostBanner/PostBannerThreadItem';
import { Colors, Images } from 'config';
import { cities } from 'data/city';
import { scaleH, scaleW } from 'utils/scale';
import Spinner from 'react-native-loading-spinner-overlay';

const styles = StyleSheet.create({
  headerRight: {
    width: scaleH(28),
    height: scaleH(28),
    borderRadius: scaleH(28),
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: scaleH(40),
  },
});

const HeaderRight = ({ onPress }) => (
  <TouchableOpacity style={styles.headerRight} onPress={onPress}>
    <Icon name="grid" color={Colors.white} size={scaleH(15)} />
  </TouchableOpacity>
);

const CityThread = ({ navigation, route }) => {
  const { location } = route.params;
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(false);

  const handleBusinessPress = (business) => {
    navigation.navigate('Business', {
      business,
    });
  };

  const fetchCity = async () => {
    setLoading(true);
    try {
      const cityData = await API.graphql(
        graphqlOperation(getCity, { id: location.id }),
      );
      setCity(cityData.data.getCity);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <Header
        navigation={navigation}
        title={location.name}
        right={
          <HeaderRight
            navigation={navigation}
            onPress={() => navigation.navigate('CityGridView', { location })}
          />
        }
      />
      <FlatList
        contentContainerStyle={{
          paddingHorizontal: scaleW(12),
          paddingVertical: scaleH(12),
        }}
        data={city.posts?.items}
        renderItem={({ item, index }) => (
          <PostItemContainer
            thread
            key={item.id}
            data={item}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaContainer>
  );
};

export default CityThread;
