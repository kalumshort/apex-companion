import React, { Component } from 'react';
import { 
        View, 
        Text, 
        TouchableHighlight, 
        FlatList, 
        StyleSheet,
        ImageBackground,
        Image,
        Dimensions,
        ScrollView
        } from 'react-native';

class MapPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>
                <Text style={styles.mapText}>Loot Tiers</Text>
                <Image
                    source={require('../assets/Apex-map-rare.jpg')}
                    style={styles.mapImage}
                />
                <Text style={styles.mapText}>Supply Crates</Text>
                <Image
                    source={require('../assets/Apex_SupplyCratesMap.jpg')}
                    style={styles.mapImage}
                />
                <Text style={styles.mapText}>Respawn Beacons</Text>
                 <Image
                    source={require('../assets/Apex_RespawnBeaconsMap-720x405.jpg')}
                    style={styles.mapImage}
                />
                <Text style={styles.mapText}>Survey Beacons</Text>
                 <Image
                    source={require('../assets/Apex_SurveyBeaconsMap.jpg')}
                    style={styles.mapImage}
                />
                </ScrollView>
            </View>
            </>
        );
    }
}

export default MapPage;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center'
    },
    mapImage: {
        flex:1,
        justifyContent: 'center',
        width: WIDTH*1,
        height: HEIGHT*0.5,
    
    },
    itemText: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#DA292A',
        margin: WIDTH*0.25,
        fontSize:20,
        padding: 4,
        borderRadius: 10,
    },
    mapImageGloss: {
        flex:1,
        justifyContent: 'center',
        width: WIDTH*0.5,
        height: HEIGHT*0.6,
    },
    mapText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '100',
        fontStyle: 'italic',
        marginTop: 20,
    }
})