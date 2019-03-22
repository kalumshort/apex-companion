import React, { Component } from 'react';
import { 
        View, 
        Image,
        Text, 
        TouchableHighlight, 
        FlatList, 
        StyleSheet,
        ImageBackground,
        Dimensions,
        ScrollView
        } from 'react-native';

import ImageSlider from 'react-native-image-slider';
import Carousel from 'react-native-snap-carousel';

import passItems from '../assets/season1pass.json';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
class Season1Slider extends Component {
    constructor(props){
        super(props);
    }

    
    _renderItem ({item, index}) {

        const source = {uri: item.img}
        return (
            <View style={styles.slide}>
                <Image
                    source={source}
                    style={styles.image}
                >
                </Image>
            </View>
        );
    }

    render () {
        return (
            <View style={styles.Carousel}
            >
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={passItems}
                    renderItem={this._renderItem}
                    sliderWidth={WIDTH*1}
                    itemWidth={WIDTH*0.3}
                />
            </View>
        );
    }
}

export default Season1Slider;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey'
    },
    Carousel: {
        // backgroundColor: 'red',
    },
    slide: {
        // flex: 1,
        // backgroundColor: 'blue',
    },
    image: {
        // flex: 1,
        width: WIDTH*0.3,
        height: 250,
        resizeMode: 'contain'
    }
    
})