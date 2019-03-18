import React, { Component } from 'react';
import { connect } from 'react-redux';
import SeasonsPage from '../components/Seasons';

class SeasonsScreen extends Component {
    constructor(props) {
        super(props);
        this.handleSeason1Press = this.handleSeason1Press.bind(this);
    }
    handleSeason1Press = () => {
        this.props.navigation.navigate('Season1');
    }

    render() {
        return(
            <>
                <SeasonsPage
                handleSeason1Press = {this.handleSeason1Press}
                />
            </>
        )
    }
}

export default SeasonsScreen;