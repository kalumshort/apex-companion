import React, { Component } from 'react';
import { connect } from 'react-redux';
import MapPage from '../components/Mappage';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
            <MapPage
            
            />
            </>
        )
    }
}

export default HomeScreen;