import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

export default function HomeTabs({tabs, tabIndex, setTabIndex}) {
  return (
    <View style={styles.container}>
      {tabs.map((item, index) => {
        return (
          <TouchableOpacity
            style={[
              styles.tabWrapper,
              tabIndex === index
                ? {
                    borderColor: '#ffca44',
                    borderBottomWidth: 2,
                    paddingBottom: 4,
                  }
                : null,
            ]}
            key={index}
            onPress={() => {
              tabIndex !== index ? setTabIndex(index) : null;
            }}>
            <Text style={styles.tabs}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.8,
    flexDirection: 'row',
    paddingBottom: 5,
    marginVertical: 15,
  },
  tabWrapper: {
    width: (width * 0.8) / 5 - 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#c3c3c3',
    paddingBottom: 5,
  },
  tabs: {
    color: '#241f16',
    fontSize: 14,
  },
});
