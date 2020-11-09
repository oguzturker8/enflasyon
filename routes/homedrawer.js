import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Logout from '../screens/Logout';
import ItemStack from './itemstack';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      //openByDefault
      edgeWidth={20}
      drawerStyle={{
        width: 180,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 30,
        elevation: 2,
        zIndex: 2,
        borderTopEndRadius: 8,
        borderBottomEndRadius: 8,
      }}
      drawerContentOptions={{
        activeTintColor: '#000',
        activeBackgroundColor: '#ffca44',
        inactiveTintColor: '#242016',
        inactiveBackgroundColor: '#f9eed2',
        itemStyle: {
          width: 160,
          marginVertical: 5,
          elevation: 2,
          zIndex: 2,
        },
      }}
      overlayColor="#e5e5e5">
      <Drawer.Screen name="Home" component={ItemStack} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
}
