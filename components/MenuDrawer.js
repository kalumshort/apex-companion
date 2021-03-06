import React from 'react';

import { 
    View,
    Text,
    Platform,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
} from 'react-native';

import { 
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome,
    Foundation,

 } from '@expo/vector-icons';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default class MenuDrawer extends React.Component {

    render() {
        return(
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.drawerHeader}>
                    <Image style={styles.headerImage} source={{uri:'https://media.contentapi.ea.com/content/dam/apex-legends/common/legend-wallpapers/apex-concept-art-wallpaper-caustic.png'}}/>
                </View>
                <View style={styles.linksContainer}>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Home')}>
                            <MaterialCommunityIcons
                                name="home"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Legends')}>
                            <MaterialCommunityIcons
                                name="crown"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Legends</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Guns')}>
                            <MaterialCommunityIcons
                                name="pistol"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Weapons</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Attachments')}>
                            <FontAwesome
                                name="crosshairs"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Attachments</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Health')}>
                            <Foundation
                                name="first-aid"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Health Items</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Map')}>
                            <MaterialCommunityIcons
                                name="map-legend"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Map</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Seasons')}>
                            <MaterialCommunityIcons
                                name="road"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Seasons</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.Links} onPress={() => this.props.navigation.navigate('Contact')}>
                            <MaterialCommunityIcons
                                name="message-text"
                                size={37}
                                style={styles.icon}
                            />
                            <Text style={styles.link}>Contact</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#30302e',
        flex: 1,
    },
    drawerHeader: {
        height: Height*0.3,
        backgroundColor: 'red',

    },
    headerImage: {
        flex: 1,
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
        margin: 10,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    link: {
        color: 'white',
        fontSize: 20,
        fontWeight: '100',
    },
})