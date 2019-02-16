import React, { Component } from "react";
import GunDetail from '../components/GunDetail';



 class GunDetailScreen extends Component {

    static navigationOptions = ({navigation}) => ({
        title: navigation.getParam('item').name,
        headerStyle:{
          backgroundColor: '#303030',
      },
      headerTitleStyle:{ 
          color: '#f2f2f2'
      },
      });

    render() {
        const item = this.props.navigation.getParam('item');
        return (
        <GunDetail item={item}/>
        );
    }
  }

  export default GunDetailScreen;