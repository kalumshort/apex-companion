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

class Contact extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View>
                
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
        backgroundColor: 'black'
    },
    itemImage: {
        flex:1,
        justifyContent: 'center',
        width: WIDTH*1,
        height: HEIGHT*0.33,
    
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