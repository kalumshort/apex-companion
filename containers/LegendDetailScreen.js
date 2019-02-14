import React, { Component } from "react";
import LegendDetail from '../components/LegendDetail';



 class LegendDetailScreen extends Component {

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
        <LegendDetail item={item}/>
        );
    }
  }

  export default LegendDetailScreen;