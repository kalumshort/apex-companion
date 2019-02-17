import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from '../components/Contact';

class ContactScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
            <Contact
            />
            </>
        )
    }
}

export default ContactScreen;