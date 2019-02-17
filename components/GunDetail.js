import React, { Component } from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableHighlight, 
    ScrollView,
    Dimensions
     } from 'react-native';

import { Constants, WebBrowser } from 'expo';




const GunDetail = ({item}) => {

    // const source = {uri: item.mastiff.img}

    return(
        <>
        <View style={styles.container}>
            <ScrollView>
               <View>
                   <Text style={styles.name}>{item.guntype}</Text>
                   {/* <Image

                       source={source}
                       style={styles.image}
                   /> */}
               </View>
            </ScrollView>
        </View>
        </>
    );
}

  export default GunDetail;

  
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    image: {
        width: WIDTH*0.9,
        height: HEIGHT*0.2,
    },
    imageContainer:{
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
    },
    name: {
        color:'white',
        fontSize: 40,
        fontWeight: '100',
    },
    sub: {
        color:'white',
        fontStyle: 'italic',
    },
    bio: {
        margin: 20,
        color: 'white'
    },
    abilities: {
        alignItems: 'center',
    },
    abilitiesTitle: {
        color: 'white',
        fontSize: 30,
    },
    abilityType: {
        color: 'red',
        fontSize: 16,
    },
    abilitiesImage: {
        width: WIDTH*0.3,
        height: HEIGHT*0.2,
    },
    abilityContainer: {
        alignItems: 'center',
    },
    abilityName: {
        color: 'white',
        fontSize: 21
    },
    abilityAbout: {
        color: 'white',
        margin: 20,
        textAlign: 'center',
    }
});
