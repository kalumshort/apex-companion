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
                    <TouchableHighlight
                    // onPress={handlePress}
                    >
                        <ImageBackground
                        style={styles.legendsImage}
                        source={require('../assets/apex-embed-legends-lineup.png')}>
                            <Text style={styles.legendsText}>View Legends</Text>
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
    legendsImage: {
        flex:1,
        justifyContent: 'center',
        width: WIDTH*1,
        height: HEIGHT*0.4,
    
    },
    legendsText: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#DA292A',
        margin: WIDTH*0.25,
        fontSize:20,
        padding: 4,
        borderRadius: 10,
    }
})