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
    TouchableHighlight
} from 'react-native';
// Importing the homepage screens
import HomeScreen from './containers/HomePageScreen';
// Importing the pages for the legedns pages
import LegendsListScreen from './containers/legendsListScreen';
import LegendDetailScreen from './containers/LegendDetailScreen';
// Importing the pages for the gun pages
import GunListScreen from './containers/GunListScreen';
import GunDetailScreen from './containers/GunDetailScreen';
// Importing the Map Page
import MapScreen from './containers/MapPageScreen';
// Importing the Contact Screen
import ContactScreen from './containers/ContactScreen';
// Importing the menu button component
import MenuButton from './components/MenuButton';


// Styling the stack navigators
const navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <MenuButton
                onPress={() => navigation.toggleDrawer()}
            />
        ),
        headerLeft: (
            <TouchableHighlight
            onPress={() => navigation.navigate('Home')}
            >
                <Image
                style={{width: 70, height: 40, padding:2}}
                source={require('./assets/apex-legends-logo-white.png')} 
                />
            </TouchableHighlight>

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

// Stack for the Home Page
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

// Stack for the legends pages
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

// Stack for the Gun pages
const GunStack = createStackNavigator(
    {
        Guns: {
            screen: GunListScreen
        },
        Detail: {
            screen: GunDetailScreen
        }
    },
    {
        defaultNavigationOptions: navigationOptions,
    }
);

// Stack for the Map Page
const MapStack = createStackNavigator(
    {
        Map: {
            screen: MapScreen
        }
    },
    {
        defaultNavigationOptions: navigationOptions,
    }
);

// Making the Contact Screen Stack
const ContactStack = createStackNavigator(
    {
        Contact: {
            screen: ContactScreen
        }
    },
    {
        defaultNavigationOptions: navigationOptions,
    }
);

//Finding the dimensions of the screen
const WIDTH = Dimensions.get('window').width;
// Configuring the drawer 
const DrawerConfig = {
    drawerWidth: WIDTH*0.75,
}

// MAKING THE DRAWER NAVIGATOR
const DrawerNavigator = createDrawerNavigator(
    {
        Home: HomeStack,
        Legends: LegendsStack,
        Guns: GunStack,
        Map: MapStack,
        Contact: ContactStack,
    },
    DrawerConfig
);

export default createAppContainer( DrawerNavigator );