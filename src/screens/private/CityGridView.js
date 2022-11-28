import React, { useEffect, useMemo, useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import ImageView from 'react-native-image-viewing';
import { API, graphqlOperation } from 'aws-amplify';
import { getCity } from '../../graphql/queries';
import SafeAreaContainer from 'components/SafeAreaContainer';
import Header from 'components/Headers/Header';
import { scaleH, scaleW } from 'utils/scale';
import Spinner from 'react-native-loading-spinner-overlay';

const CityGridView = ({ navigation, route }) => {
  const { location } = route.params;
  const [city, setCity] = useState({});
  const [loading, setLoading] = useState(false);
  const [imageViewVisible, setImageViewVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const handleImagePress = (index) => {
    setImageIndex(index);
    setImageViewVisible(true);
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

  const images = useMemo(() => {
    const imageData = [];
    city.posts?.items.forEach((item) => {
      item?.medias.forEach((media) => {
        imageData.push(media);
      });
    });
    return imageData;
  }, [city]);

  useEffect(() => {
    fetchCity();
  }, []);

  return (
    <SafeAreaContainer>
      <Spinner visible={loading} />
      <Header title={location.name} navigation={navigation} />
      <FlatGrid
        itemDimension={scaleW(150)}
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity key={item} onPress={() => handleImagePress(index)}>
            <Image
              source={{ uri: item }}
              style={{
                width: '100%',
                height: scaleH(150),
                borderRadius: scaleH(5),
                marginBottom: scaleH(6),
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
      <ImageView
        images={images.map((i) => ({ uri: i }))}
        imageIndex={imageIndex}
        visible={imageViewVisible}
        onRequestClose={() => setImageViewVisible(false)}
      />
    </SafeAreaContainer>
  );
};

export default CityGridView;
