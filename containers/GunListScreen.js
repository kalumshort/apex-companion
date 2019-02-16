import React, { Component } from 'react';
import { connect } from 'react-redux';
import GunList from '../components/GunList';
import {
    View,
    Text,
    TouchableHighlight,
    Flatlist, 
    StyleSheet
} from 'react-native';

class GunListScreen extends Component {
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
             <GunList
             onPress={this.handlePress}
             />
             </>
         )
     }
}



export default GunListScreen