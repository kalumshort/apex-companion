import React, { Component } from 'react';
import { 
        View, 
        Text, 
        TouchableHighlight, 
        FlatList, 
        StyleSheet,
        ImageBackground,
        Dimensions,
        ScrollView,
        Linking,
        Button
        } from 'react-native';
import { 
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome,

    } from '@expo/vector-icons';

class Contact extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <View style={styles.contact}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Contact Me!</Text>
                    </View>
                    <View style={styles.inqureContainer}>
                        <Text style={styles.inquireText}>To inquire about my work please E-Mail: </Text>
                        <Text style={styles.inquireEmai}>kalumdarcy@outlook.com</Text>
                        <Button onPress={() => Linking.openURL('mailto:kalumdarcy@outlook.com') }
                            title="kalumdarcy@outlook.com" />
                    </View>
                    <View style={styles.helpContainer}>
                        <Text style={styles.helpText}>To send me surgestions about content you want adding to this app please E-Mail </Text>
                        <Button onPress={() => Linking.openURL('mailto:kalumapexapp.outlook.com') }
                            title="kalumapexapp.outlook.com" />
                    </View>
                </View>
                <View style={styles.follow}>
                    <View style={styles.socials}>
                        <FontAwesome
                            name="twitter"
                            size={50}
                            onPress={() => Linking.openURL('https://twitter.com/KalumShort_')}
                            style={styles.icons}
                        />
                        <FontAwesome
                            name="instagram"
                            size={50}
                            onPress={() => Linking.openURL('https://www.instagram.com/kalumshort/')}
                            style={styles.icons}
                        />
                    </View>
                </View>
            </View>
            </>
        );
    }
}

export default Contact;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
    },
    contact: {
        flex: 1,
    },
    titleContainer: {
        width: WIDTH*1,
     
    },
    title:{
        color: 'white',
        fontSize: 25,
        marginTop: 10,
        textAlign: 'center',
        
    },
    inqureContainer: {
        alignItems: 'center',
        width: WIDTH*1,
        borderTopWidth: 1,
        borderColor: 'white',
        marginTop: 30,
     
    },
    inquireText: {
        color: 'white',
        fontSize: 19,
        fontStyle: 'italic',
        margin: 7,
        textAlign: 'center',
        fontWeight: '100',
    },
    inquireEmai: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    helpContainer: {
        marginTop: 30,
        alignItems: 'center',
        width: WIDTH*1,
        borderTopWidth: 1,
        borderColor: 'white',
    },
    helpText: {
        color: 'white',
        fontSize: 19,
        fontStyle: 'italic',
        margin: 7,
        textAlign: 'center',
        fontWeight: '100',
    },
    helpEmail: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    follow: {

    },
    socials: { 
        flexDirection: 'row',

    },
    icons: {
        color: 'white',
        margin: 30,
    },
   
})