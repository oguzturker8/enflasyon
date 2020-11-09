import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import HomeListItem from './homelistitem';

const {width, height} = Dimensions.get('window');

export default function HomeList({category, filtered, data, navigation}) {
  return (
    <View style={styles.listContainer}>
      {category === 'All'
        ? filtered.map((item, index) => {
            return (
              <HomeListItem
                key={index}
                datakey={index}
                item={item}
                navigation={navigation}
              />
            );
          })
        : filtered
            .filter((item) => item.category === category)
            .map((item, index) => {
              return (
                <HomeListItem
                  key={index}
                  datakey={index}
                  item={item}
                  navigation={navigation}
                />
              );
            })}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: width * 0.8,
    flexDirection: 'row',
    flexWrap: 'wrap',

    //justifyContent: 'center',
  },
});
