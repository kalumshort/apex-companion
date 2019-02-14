import React from 'react';

import {
    createStackNavigator,
    createAppContainer,
    createDrawerNavigator
} from 'react-navigation';

import {
    Platform,
    Dimensions,
    Image,
} from 'react-native';

import HomeScreen from './containers/HomePageScreen';
import LegendsListScreen from './containers/legendsListScreen';
import LegendDetailScreen from './containers/LegendDetailScreen';

import MenuButton from './components/MenuButton';

//Finding the dimensions of the screen
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
}

// Styling the stack naviagtors
const navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <MenuButton
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        headerLeft: (
            <Image
            style={{width: 70, height: 40, padding:2}}
             source={require('./assets/apex-legends-logo-white.png')} />
        ),
        headerStyle: {
            backgroundColor: 'black',
        },
        headerTitleStyle: {
            color: 'lightgrey',
            paddingLeft: 30
        },
        headerRightContainerStyle: {
            paddingRight: 20
        },
        headerLeftContainerStyle: {
            paddingLeft: 20,
        }

    }
}

// MAKING THE STACK NAVIGATORS 
const HomeStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen
        }
    },
    {
        defaultNavigationOptions: navigationOptions,
    }
);

const LegendsStack = createStackNavigator(
    {
        Legends: {
            screen: LegendsListScreen
        },
        Detail: {
            screen: LegendDetailScreen
        }
    },
    {
        defaultNavigationOptions: navigationOptions,
    }
);

// MAKING THE DRAWER NAVIGATOR
const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Legends: LegendsStack,
    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );