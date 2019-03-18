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



class SeasonsPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>
                    {/* SEASONS 1 */}
                    <TouchableHighlight
                    onPress={this.props.handleSeason1Press}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-season-1-video-backup-xl.jpg.adapt.1920w.jpg"}}>
                            <Text style={styles.itemText}>Season 1</Text>
                        </ImageBackground>
                    </TouchableHighlight>
                </ScrollView>
            </View>
            </>
        );
    }
}

export default SeasonsPage;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
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