import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight, 
    StyleSheet,
    FlatList,
} from 'react-native';

import legends from '../assets/legends.json';

class LegendsList extends Component {
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
        return (
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                underlayColor='#e4e4e4' 
                onPress={handlePress} 
                style={styles.button}
                >
                    <Text style={styles.listItem}>{item.name}</Text>
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
            data={legends} 
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={this.renderItem} 
            />
        );
    }

}

export default LegendsList;

const styles = StyleSheet.create({
    listItem: {
        height:50,
        fontSize: 18,
        padding: 10,

    },
    button: {
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },

});