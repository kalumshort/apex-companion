import React from 'react';

import { 
    View,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { 
    Ionicons,
    MaterialCommunityIcons,

 } from '@expo/vector-icons';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {
    navLink(nav, text) {
        return(
            <TouchableOpacity onPress={() => this.props.navigation.navigate(nav)}>
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.drawerHeader}>

                </View>
                <View style={styles.linksContainer}>
                    <View style={styles.Links}>
                        <MaterialCommunityIcons
                            name="home"
                            size={37}
                            style={styles.icon}
                        />
                         {this.navLink('Home', 'Home')}
                    </View>
                    <View style={styles.Links}>
                        <MaterialCommunityIcons
                            name="crown"
                            size={37}
                            style={styles.icon}
                        />
                        {this.navLink('Legends', 'Legends')}
                    </View>
                    <View style={styles.Links}>
                        <MaterialCommunityIcons
                            name="pistol"
                            size={37}
                            style={styles.icon}
                        />
                        {this.navLink('Guns', 'Guns')}
                    </View>
                    <View style={styles.Links}>
                        <MaterialCommunityIcons
                            name="map-legend"
                            size={37}
                            style={styles.icon}
                        />
                        {this.navLink('Map', 'Map')}
                    </View>
                    <View style={styles.Links}>
                        <MaterialCommunityIcons
                            name="message-text"
                            size={37}
                            style={styles.icon}
                        />
                        {this.navLink('Contact', 'Contact')}
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    drawerHeader: {
        height: Height*0.3,
        backgroundColor: 'red',

    },
    linksContainer: {

    },
    icon: {
        color: 'white',
        margin: 10,
    },
    Links: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    link: {
        color: 'white',
        fontSize: 25,
    },
})