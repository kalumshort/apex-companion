import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeasonsPage from '../components/Seasons';

import {
    Alert
}from 'react-native';

class SeasonsScreen extends Component {
    constructor(props) {
        super(props);
        this.handleSeason1Press = this.handleSeason1Press.bind(this);
        this.handleAlertPress = this.handleAlertPress.bind(this); 
    }
    handleSeason1Press = () => {
        this.props.navigation.navigate('Season1');
    }
    handleAlertPress = () => {
        Alert.alert(
            'WHOOPS',
            'More Seasons are too follow',
            [
              {text: 'Ok'},
            ],
            {cancelable: false},
          );
    };

    render() {
        return(
            <>
                <SeasonsPage
                handleSeason1Press = {this.handleSeason1Press}
                // handleAlertPress = {this.handleAlertPress}
                />
            </>
        )
    }
}

export default SeasonsScreen;