import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/Hompage';
import {
    Alert
}from 'react-native';

class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.handleLegendsPress = this.handleLegendsPress.bind(this);
        this.handleGunsPress = this.handleGunsPress.bind(this);
        this.handleMapPress = this.handleMapPress.bind(this);
    }
    handleLegendsPress = () =>{
        this.props.navigation.navigate('Legends', {
            
        });
    };
    handleGunsPress = () => {
        this.props.navigation.navigate('Guns',{

        });
    };
    handleMapPress = () => {
        this.props.navigation.navigate('Map');
    };
    handleAlertPress = () => {
        Alert.alert(
            'Sorry',
            'Page under construction',
            [
              {text: 'Ok'},
            ],
            {cancelable: false},
          );
    };
    render() {
        return(
            <>
            <HomePage
            handleLegendsPress={this.handleLegendsPress}
            handleGunsPress={this.handleGunsPress}
            handleMapPress={this.handleMapPress}
            handleAlertPress={this.handleAlertPress}
            />
            </>
        )
    }
}

export default MapScreen;