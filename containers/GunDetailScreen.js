import React, { Component } from "react";
import GunDetail from '../components/GunDetail';



 class GunDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').guntype,
      });

    render() {
        const item = this.props.navigation.getParam('item');
        return (
        <GunDetail item={item}/>
        );
    }
  }

  export default GunDetailScreen;