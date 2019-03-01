import React, { Component } from 'react';
//Importing the different react native packages needed
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
// Importing the icons for use
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
            {/* Container for the contact page */}
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.contact}>
                        {/* Title of the contact page */}
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Contact Me!</Text>
                        </View>
                        {/* Inquire about work container */}
                        <View style={styles.inqureContainer}>
                            <Text style={styles.inquireText}>To inquire about my work please E-Mail: </Text>
                            <Button onPress={() => Linking.openURL('mailto:kalumdarcy@outlook.com') }
                                title="kalumdarcy@outlook.com" />
                        </View>
                        {/* Suggestions container */}
                        <View style={styles.helpContainer}>
                            <Text style={styles.helpText}>To send suggestions about content you want adding to this app please E-Mail </Text>
                            <Button onPress={() => Linking.openURL('mailto:kalumapexapp@outlook.com') }
                                title="kalumapexapp.outlook.com" />
                        </View>
                        {/* XBOX container */}
                        <View style={styles.inqureContainer}>
                            <Text style={styles.inquireText}>Add me on XBOX! always up for a round of apex</Text>
                            <Text style={styles.gamertag}>KALUIVI</Text>
                        </View>
                        {/* Donation Container */}
                        <View style={styles.donateContainer}>
                            <Text style={styles.donationText}>Donations are not requred but very appreciated</Text>
                            <Button onPress={() => Linking.openURL('https://www.paypal.me/KalumS') }
                                title="Donate"
                                style={styles.donate} />
                            <Text style={styles.builtName}>This app is built by Kalum Short</Text>
                        </View>
                    </View>
                    <View style={styles.follow}>
                        {/* Socials container */}
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
                </ScrollView>
            </View>
            </>
        );
    }
}

export default Contact;

//Setting the width dimentions of the screen
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

//Styling for the contact page
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
        flex: 1,
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
    donateContainer: {
        marginBottom: 20,
        borderTopWidth: 1,
        borderColor: 'white',
    },
    donationText: {
        textAlign: 'center',
        color: 'white',
        margin: 10,
    },
    builtName: {
        textAlign: 'center',
        color: 'white',
        marginTop: 20,
    },
    gamertag:{
        fontSize: 25,
        margin: 10,
        color:'lightgreen',
    },
    donate: {

    },
    follow: {
        borderTopWidth: 1,
        borderColor: 'white',
        alignItems: 'center',

    },
    socials: { 
        flexDirection: 'row',

    },
    icons: {
        color: 'white',
        margin: 20,
    },
   
})