import React from 'react';

import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import HomeScreen from './containers/HomePageScreen';

// MAKING THE STACK NAVIGATORS 
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        }
    }
);
// MAKING THE DRAWER NAVIGATOR
const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
    }
);

export default createAppContainer( DrawerNavigator );