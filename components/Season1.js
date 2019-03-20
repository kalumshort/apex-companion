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
import Season1Slider from './Season1Slider';

class Season1Page extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>
                    <Image
                    style={styles.headerImage}
                    source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/03/apex-tout-small-homepage-octane-5x2-xl.jpg.adapt.crop5x2.1920w.jpg"}}
                    >
                    </Image>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerSeason}>Season 1</Text>
                        <Text style={styles.headerName}>(Wild Frontier)</Text>
                    </View>
                    <View>
                        <Season1Slider/>
                    </View>
                </ScrollView>
            </View>
            </>
        );
    }
}

export default Season1Page;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    headerImage: {
        width: WIDTH*1,
        height: HEIGHT*0.2,
        marginTop: 10,
    },
    headerContainer: {
        alignItems: 'center',
    },
    headerSeason: {
        fontSize: 23,
        color: 'white',
        textAlign:'center',

    },
    headerName: {
        fontStyle: 'italic',
        color: 'white',
    },
    itemImage: {
        flex:1,
        justifyContent: 'center',
        width: WIDTH*1,
        height: HEIGHT*0.33,
        marginBottom: 2,
    
    },
    itemText: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#DA292A',
        margin: WIDTH*0.25,
        fontSize:20,
        padding: 4,
        borderRadius: 10,
    }
})