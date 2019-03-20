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

import ImageSlider from 'react-native-image-slider';

class Season1Slider extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <ImageSlider images={[
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any',
        'http://placeimg.com/640/480/any'
        ]}
        />
        )
    }
}

export default Season1Slider;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    
})