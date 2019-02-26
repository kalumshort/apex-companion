import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight, 
    StyleSheet,
    FlatList,
    Image,
    Dimensions,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import guns from '../assets/guns.json';

class GunList extends Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);

    }

    keyExtractor(item, index) {
        return `${index}`;  // must return a string here.
    }

    renderItem({item}) {
        const handlePress = () => {
            this.props.onPress(item);
        }
        const source = {uri: item.img}
        return (
            <View style={styles.container}>
                <TouchableHighlight 
                onPress={handlePress} 
                style={styles.button}
                >
                <View style={styles.buttonContents}>
                   <Image
                       source={source}
                       style={styles.image}
                   />
                    
                </View>
                </TouchableHighlight>
            </View>
        );
    }

    renderSeparator() {
        const style = { height: 1, backgroundColor: '#ddd', marginLeft: 10, };
            return <View style={style} />;
    }

    render() {
        return (
            <FlatList  
            data={guns} 
            keyExtractor={this.keyExtractor}
            // ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderItem} 
            />
        );
    }

}

export default GunList;

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,

    },
    button: {
    },
    buttonContents: {
        alignItems:'center',
    },
    image: {
        width: WIDTH*1,
        height: HEIGHT*0.3,
    },
    name: {
        color: 'white'
    }


});