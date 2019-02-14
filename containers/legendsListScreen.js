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
     }
     render(){
         return(
             <>
             <LegendsList
             
             />
             </>
         )
     }
}



export default LegendsListScreen