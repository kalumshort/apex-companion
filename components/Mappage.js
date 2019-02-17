import React, { Component } from 'react';
// Packages from react native
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

// Package for making the images zommable
import ImageZoom from 'react-native-image-pan-zoom';



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

                    {/* Rarity apex map */}
                    <ImageZoom
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height*0.5}
                        imageWidth={Dimensions.get('window').width}
                        imageHeight={Dimensions.get('window').height*0.5}
                    >
                        <Image
                            source={require('../assets/Apex-map-rare.jpg')}
                            style={styles.mapImage}
                        />
                    </ImageZoom>

                    {/* Supply Crates Map */}
                    <Text style={styles.mapText}>Supply Crates</Text>
                    <ImageZoom
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height*0.5}
                        imageWidth={Dimensions.get('window').width}
                        imageHeight={Dimensions.get('window').height*0.5}
                    >
                        <Image
                            source={require('../assets/Apex_SupplyCratesMap.jpg')}
                            style={styles.mapImage}
                        />
                    </ImageZoom>

                    {/* Respawn Beacons Map */}
                    <Text style={styles.mapText}>Respawn Beacons</Text>
                    <ImageZoom
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height*0.5}
                        imageWidth={Dimensions.get('window').width}
                        imageHeight={Dimensions.get('window').height*0.5}
                    >
                        <Image
                            source={require('../assets/Apex_RespawnBeaconsMap-720x405.jpg')}
                            style={styles.mapImage}
                        />
                    </ImageZoom>

                   {/* Survey Beacons Map */}
                    <Text style={styles.mapText}>Survey Beacons</Text>
                    <ImageZoom
                        cropWidth={Dimensions.get('window').width}
                        cropHeight={Dimensions.get('window').height*0.5}
                        imageWidth={Dimensions.get('window').width}
                        imageHeight={Dimensions.get('window').height*0.5}
                    >
                        <Image
                            source={require('../assets/Apex_SurveyBeaconsMap.jpg')}
                            style={styles.mapImage}
                        />
                    </ImageZoom>
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