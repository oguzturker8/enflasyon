import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';

const SPACING = 20;

export default function InflationItem({item, bg, current}) {
  const calcRate = () => {
    if (item.price > current) {
      return (
        <Text style={[styles.price, {color: 'red'}]}>
          ${item.price} {'   '} x{(item.price / current).toFixed(2)}
        </Text>
      );
    } else if (item.price < current) {
      return (
        <Text style={[styles.price, {color: 'green'}]}>
          ${item.price} {'   '} x{(current / item.price).toFixed(2)}
        </Text>
      );
    } else {
      return (
        <Text style={[styles.price, {color: 'black'}]}>
          ${item.price} {'   '} x1
        </Text>
      );
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: bg}]}>
      {calcRate()}
      <Text style={styles.date}>
        {moment
          .unix(item.date)
          .format('DD/MM/YYYY')
          .replace('/', '-')
          .replace('/', '-')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2.5,
    flex: 1,
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderRadius: 8,
    elevation: 2,
    zIndex: 2,
  },
  price: {
    color: '#000',
    fontSize: 16,
  },
  date: {
    color: '#000',
    fontSize: 16,
  },
});
