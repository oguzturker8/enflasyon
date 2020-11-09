import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Back from '../components/back';
import InflationItem from '../components/inflationitem';

const SPACING = 20,
  {width, height} = Dimensions.get('window'),
  ITEM_HEIGHT = 120,
  ITEM_WIDTH = 200;

export default function ItemDetail({route, navigation}) {
  const {item} = route.params;

  const currentPrice = item.price;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Back navigation={navigation} />
        <Text>About Product</Text>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <Text style={styles.category}>{item.category}</Text>
        <Image style={styles.itemImage} source={{uri: item.image}} />
        <View style={styles.inflationWrapper}>
          <Text style={styles.inflationText}>Price</Text>
          <Text style={styles.inflationText}>Date</Text>
        </View>
        {item.inflation
          .sort((item1, item2) => {
            return item1.date > item2.date ? -1 : 1;
          })
          .map((item, index) => {
            return (
              <InflationItem
                key={index}
                item={item}
                current={currentPrice}
                bg={index % 2 == 1 ? '#fff' : '#f6f6f6'}
              />
            );
          })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SPACING,
    paddingTop: SPACING,
    paddingBottom: SPACING * 3,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  topWrapper: {
    position: 'absolute',
    left: SPACING,
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: '#242016',
    fontSize: 24,
  },
  category: {
    fontSize: 16,
    color: '#d1d1d1',
  },
  price: {
    color: '#000',
    fontSize: 18,
  },
  itemImage: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
  },
  inflationWrapper: {
    width: width * 0.9,
    marginTop: SPACING * 3,
    marginBottom: SPACING / 2,
    paddingHorizontal: 10,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inflationText: {
    color: '#000',
    fontSize: 14,
  },
});
