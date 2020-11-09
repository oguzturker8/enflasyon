import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default function Slider({images}) {
  const [indx, setIndx] = useState(0);
  console.log(images);
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        scrollEventThrottle={16}
        pagingEnabled
        bounces={false}
        data={images}
        keyExtractor={(item, index) => 'key' + index}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) =>
          setIndx(event.nativeEvent.contentOffset.x / (width * 0.85))
        }
        renderItem={({item, index}) => {
          return (
            <Image key={index} style={styles.image} source={{uri: item}} />
          );
        }}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.indicator,
                indx === index ? {backgroundColor: '#ffca44'} : null,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.85,
    height: (width * 0.85) / 2,
    borderRadius: 8,
    backgroundColor: 'blue',
    marginVertical: 15,
    zIndex: 2,
    elevation: 2,
  },
  image: {
    width: width * 0.85,
    height: (width * 0.85) / 2,
    borderRadius: 8,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
    alignSelf: 'center',
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f9eed2',
    borderColor: '#ffca44',
    marginHorizontal: 5,
    borderWidth: 1,
  },
});
