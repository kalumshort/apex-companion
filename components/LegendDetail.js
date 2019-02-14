import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView } from 'react-native';
import { Constants, WebBrowser } from 'expo';


const styles = StyleSheet.create({
    contactContainer: {
        padding: 20,
    },
    picture: {
        height: 200, 
        width: 200,
        marginBottom: 10,
        alignSelf: 'center',
    },
    Text: {
        fontSize: 18,
        margin: 5,
    },
});


const LegendDetail = ({item}) => {
    return(
        <>
        <Text>{item.name}</Text>
        </>
    );
}

  export default LegendDetail;