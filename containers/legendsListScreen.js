import React, { Component } from 'react';
import { connect } from 'react-redux';
import LegendsList from '../components/LegendsList';
import {
    View,
    Text,
    TouchableHighlight,
    Flatlist, 
    StyleSheet
} from 'react-native';

class LegendsListScreen extends Component {
     constructor(props){
         super(props);
         this.handlePress = this.handlePress.bind(this);
     }
    handlePress = (item) =>{
        this.props.navigation.navigate('Detail', {
            item
        });
    };
     render(){
         return(
             <>
             <LegendsList
             onPress={this.handlePress}
             />
             </>
         )
     }
}



export default LegendsListScreen