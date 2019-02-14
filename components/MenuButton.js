import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default class MenuButton extends Component {
    render(){
        return(
            <>
                <Ionicons
                    name="md-menu"
                    color='white'
                    size={37}
                    onPress={this.props.onPress}
                />
            </>
        )
    }
}