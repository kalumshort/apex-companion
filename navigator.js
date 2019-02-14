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

import MenuButton from './components/MenuButton';

//Finding the dimensions of the screen
const WIDTH = Dimensions.get('window').width;
const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
}

// Styling the stack naviagtors
const navigationOptionsHome = ({ navigation }) => {
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
        title: 'Home',
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
        defaultNavigationOptions: navigationOptionsHome,
    }
);

// MAKING THE DRAWER NAVIGATOR
const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );