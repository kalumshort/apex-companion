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




const LegendDetail = ({item}) => {

    const source = {uri: item.img}
    const tacticalSource = {uri: item.abilities.tactical.img}
    const passiveSource = {uri: item.abilities.passive.img}
    const ultimateSource = {uri: item.abilities.ultimate.img}

    return(
        <>
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image 
                    source={source}
                    style={styles.image}    
                    />
                </View>
                <View style={styles.title}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.sub}>{item.subheading}</Text>
                    <ScrollView>
                        <Text style={styles.bio}>{item.bio}</Text>
                    </ScrollView>
                </View>
                <View style={styles.abilities}>
                    <Text style={styles.abilitiesTitle}>Abilities</Text>
                    <View style={styles.abilityContainer}>
                        <Text style={styles.abilityType}>Tactical Abilitiy</Text>
                        <Image style={styles.abilitiesImage}source={tacticalSource}/>
                        <Text style={styles.abilityName}>{item.abilities.tactical.name}</Text>
                        <Text style={styles.abilityAbout}>{item.abilities.tactical.about}</Text>
                    </View>
                    <View style={styles.abilityContainer}>
                        <Text style={styles.abilityType}>Passive Ability</Text>
                        <Image style={styles.abilitiesImage} source={passiveSource}/>
                        <Text style={styles.abilityName}>{item.abilities.passive.name}</Text>
                        <Text style={styles.abilityAbout}>{item.abilities.passive.about}</Text>
                    </View>
                    <View style={styles.abilityContainer}>
                        <Text style={styles.abilityType}>Ultimate Ability</Text>
                        <Image style={styles.abilitiesImage} source={ultimateSource}/>
                        <Text style={styles.abilityName}>{item.abilities.ultimate.name}</Text>
                        <Text style={styles.abilityAbout}>{item.abilities.ultimate.about}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
        </>
    );
}

  export default LegendDetail;

  
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    image: {
        width: WIDTH*0.6,
        height: HEIGHT*0.6,
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
