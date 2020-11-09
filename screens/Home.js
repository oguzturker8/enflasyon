import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import SearchBar from '../components/searchbar';
import HomeTabs from '../components/hometabs';
import HomeList from '../components/homelist';
import product from '../database/product.json';
import {ScrollView} from 'react-native-gesture-handler';
import Slider from '../components/slider';
import DrawerToggler from '../components/drawertoggler';

const SPACING = 20;
const {width, height} = Dimensions.get('window');
const TABS = ['All', 'Car', 'Food', 'Tech', 'Goods'];
const images = [
  'https://i.pinimg.com/originals/0b/a3/d6/0ba3d60362c7e6d256cfc1f37156bad9.jpg',
  'https://i.pinimg.com/originals/fe/fb/32/fefb324f0f3be423595e19d1736930d6.jpg',
  'https://i.pinimg.com/736x/eb/bb/09/ebbb09b5ff256c6eeeda71d6dc325cc7.jpg',
  'https://png.pngtree.com/thumb_back/fw800/background/20190220/ourmid/pngtree-memphis-contrast-color-blue-geometric-image_8793.jpg',
];

export default function Home({navigation}) {
  const [rawData, setRawData] = useState(product);
  const [filtered, setFiltered] = useState(rawData);
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ScrollView
      style={{backgroundColor: '#fff', flex: 1}}
      bounces={false}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <DrawerToggler navigation={navigation} />
        <SearchBar setFiltered={setFiltered} rawData={rawData} />
        <Slider images={images} />
        <HomeTabs tabs={TABS} tabIndex={tabIndex} setTabIndex={setTabIndex} />
        <HomeList
          category={TABS[tabIndex]}
          data={rawData}
          filtered={filtered}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: SPACING,
    alignItems: 'center',
  },
  viewPager: {
    width: '70%',
    height: height,
    backgroundColor: 'yellow',
  },
  tabWrapper: {
    width: 30,
    backgroundColor: 'red',
  },
});
