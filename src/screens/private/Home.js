import React, { useEffect, useState } from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import Autocomplete from 'react-native-autocomplete-input';
import { MaterialIndicator } from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Octicons';
import SafeAreaContainer from 'components/SafeAreaContainer';
import Header from 'components/Headers/Header';
import { Colors } from 'config';
import { listCitys, listBusinesss } from '../../graphql/queries';
import { scaleH, scaleW } from 'utils/scale';
import { restoreProfile } from 'reduxs/actions/profile';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scaleW(30),
    paddingTop: scaleH(130),
  },
  headerTitle: {
    fontSize: scaleH(36),
    lineHeight: scaleH(46),
    color: Colors.label,
    fontWeight: '800',
    letterSpacing: -0.02,
    marginBottom: scaleH(45),
  },
  searchIcon: {
    position: 'absolute',
    right: scaleW(10),
    top: scaleH(17),
  },
  listItem: {
    height: scaleH(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#012220',
  },
  listItemText: {
    color: Colors.reactionLabel,
    fontSize: scaleH(16),
    paddingHorizontal: scaleW(10),
  },
  listItemBusinessCount: {
    color: Colors.reactionLabel,
    fontSize: scaleH(13),
    paddingHorizontal: scaleW(10),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [cities, setCities] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [address, setAddress] = useState('');
  const [cityLoading, setCityLoading] = useState(true);

  const handleCityPress = (city) => {
    setAddress(city.name);
    Keyboard.dismiss();
    setTimeout(
      () =>
        navigation.navigate('City', {
          location: city,
        }),
      500,
    );
  };

  const renderCityItem = ({ item, index }) => {
    const cityBusinesses = businesses.filter((business) =>
      business.address.includes(item.name),
    );
    return (
      <TouchableOpacity
        onPress={() => handleCityPress(item)}
        style={styles.listItem}
      >
        <Text style={styles.listItemText}>{item.name}</Text>
        <Text style={styles.listItemBusinessCount}>{`${
          cityBusinesses.length || 0
        } listings`}</Text>
      </TouchableOpacity>
    );
  };

  const renderLoading = () => (
    <View style={styles.loadingContainer}>
      <MaterialIndicator color={Colors.primary} />
    </View>
  );
  const renderSeparator = () => <View style={styles.listViewSeparator} />;

  const fetchCities = async () => {
    try {
      setCityLoading(true);
      const cityData = await API.graphql(graphqlOperation(listCitys));
      setCities(cityData.data.listCitys.items);
      const businessData = await API.graphql(
        graphqlOperation(listBusinesss, {
          filter: {
            verifiedStatus: { eq: true },
          },
        }),
      );
      setBusinesses(businessData.data.listBusinesss.items);
      setCityLoading(false);
    } catch (e) {
      console.log(e);
      setCityLoading(false);
    }
  };

  useEffect(() => {
    dispatch(restoreProfile());
    fetchCities();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaContainer>
      {cityLoading ? (
        renderLoading()
      ) : (
        <View style={{ flex: 1 }}>
          <Header navigation={navigation} />
          <View style={styles.container}>
            <Text style={styles.headerTitle}>
              Find Places That Put You First
            </Text>
            <View>
              <Autocomplete
                data={
                  address.length
                    ? cities.filter((item) => item.name.includes(address))
                    : []
                }
                defaultValue={address}
                onChangeText={setAddress}
                placeholder="Search for a city, or area"
                placeholderTextColor={Colors.lightLabel}
                renderItem={renderCityItem}
                renderSeparator={renderSeparator}
                inputContainerStyle={{
                  borderWidth: 0,
                }}
                style={{
                  backgroundColor: Colors.inputBackground,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  paddingHorizontal: scaleW(10),
                  height: scaleH(57),
                  color: Colors.reactionLabel,
                  fontSize: scaleH(16),
                  letterSpacing: -0.02,
                }}
                listStyle={{
                  borderWidth: 0,
                  backgroundColor: Colors.black,
                }}
              />
              <Icon
                name="search"
                color={Colors.reactionLabel}
                size={scaleH(20)}
                style={styles.searchIcon}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaContainer>
  );
};

export default Home;
