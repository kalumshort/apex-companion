import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/Hompage';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress = () =>{
        this.props.navigation.navigate('Legends', {
            
        });
    };
    render() {
        return(
            <>
            <HomePage
            handlePress={this.handlePress}
            />
            </>
        )
    }
}

export default HomeScreen;