import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/Hompage';

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
    }
    render() {
        return(
            <>
            <HomePage
            handleLegendsPress={this.handleLegendsPress}
            handleGunsPress={this.handleGunsPress}
            handleMapPress={this.handleMapPress}
            />
            </>
        )
    }
}

export default MapScreen;