import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const IMAGE_WIDTH = (width * 0.8) / 2 - 20,
  IMAGE_HEIGHT = 80;

export default function HomeListItem({item, navigation}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('ItemDetail', {
          item: item,
        })
      }>
      <View style={styles.container}>
        <View style={styles.itemBG}>
          <Image style={styles.itemImage} source={{uri: item.image}} />
        </View>
        <View style={styles.titleWrapper}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>${item.price}</Text>
        </View>
        <Text style={styles.itemCategory}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    width: IMAGE_WIDTH,
    alignItems: 'flex-start',
  },
  itemBG: {
    width: IMAGE_WIDTH,
    height: IMAGE_HEIGHT,
    backgroundColor: '#c3c3c3',
    borderRadius: 8,
  },
  itemImage: {
    flex: 1,
  },
  titleWrapper: {
    width: IMAGE_WIDTH,
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  itemTitle: {
    flex: 1,
    fontSize: 12,
    color: '#242017',
  },
  itemPrice: {
    fontSize: 12,
    color: '#242017',
  },
  itemCategory: {
    fontSize: 10,
    color: '#a4a4a4',
  },
});
