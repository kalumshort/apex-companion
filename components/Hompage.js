import React, { Component } from 'react';
import { 
        View, 
        Text, 
        TouchableHighlight, 
        FlatList, 
        StyleSheet,
        ImageBackground,
        Dimensions,
        ScrollView
        } from 'react-native';

class HomePage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>

                    {/* VIEW LEGENDS  */}
                    <TouchableHighlight
                    onPress={this.props.handleLegendsPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={require('../assets/apex-embed-legends-lineup.png')}>
                            <Text style={styles.itemText}>Legends</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                    {/* VIEW GUNS */}
                    <TouchableHighlight
                    onPress={this.props.handleGunsPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://www.pcgamesn.com/wp-content/uploads/2019/02/apex-legends-weapons-best-guns.jpg"}}>
                            <Text style={styles.itemText}>Weapons</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                    {/* VIEW ATTACHMENTS */}
                    <TouchableHighlight
                    onPress={this.props.handleAttachmentsPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-grid-tile-about-explore-more-community.jpg"}}>
                            <Text style={styles.itemText}>Attachments</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                     {/* VIEW ATTACHMENTS */}
                     <TouchableHighlight
                    onPress={this.props.handleHealthPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/common/legend-wallpapers/apex-concept-art-wallpaper-lifeline.png"}}>
                            <Text style={styles.itemText}>Health Items</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                    {/* VIEW MAP */}
                    <TouchableHighlight
                    onPress={this.props.handleMapPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2019/02/06114439/apex_legends_1.0.jpg"}}>
                            <Text style={styles.itemText}> Map</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                     {/* VIEW SEASONS */}
                     <TouchableHighlight
                    onPress={this.props.handleSeasonsPress}
                    >
                        <ImageBackground
                        style={styles.itemImage}
                        source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-season-1-video-backup-xl.jpg.adapt.1920w.jpg"}}>
                            <Text style={styles.itemText}>Seasons</Text>
                        </ImageBackground>
                    </TouchableHighlight>

                    
                </ScrollView>
            </View>
            </>
        );
    }
}

export default HomePage;
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