import React, { Component } from 'react';
// Packages from react native
import { 
        View, 
        Text, 
        TouchableHighlight, 
        FlatList, 
        StyleSheet,
        ImageBackground,
        Image,
        Dimensions,
        ScrollView
        } from 'react-native';

// Package for making the images zommable
import ImageZoom from 'react-native-image-pan-zoom';



class HealthPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.healingHeader}>Healing Items</Text>
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Syringe</Text>
                        <Text style={styles.healthBenefit}>Heals 25 HP</Text>
                        <Text style={styles.healthTime}>(5s Use Time)</Text>
                    </View> 
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Med Kit</Text>
                        <Text style={styles.healthBenefit}>Heals 100 HP</Text>
                        <Text style={styles.healthTime}>(8s Use Time)</Text>
                    </View>
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Phoenix Kit</Text>
                        <Text style={styles.healthBenefit}>Heals 100 HP</Text>
                        <Text style={styles.healthBenefit}>Restores 100 Shield</Text>
                        <Text style={styles.healthTime}>(10s Use Time)</Text>
                    </View>
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Shield Cell</Text>
                        <Text style={styles.healthBenefit}>Restores 25 Shield</Text>
                        <Text style={styles.healthTime}>(3s Use Time)</Text>
                    </View>
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Shield Battery</Text>
                        <Text style={styles.healthBenefit}>Restores 100 Shield</Text>
                        <Text style={styles.healthTime}>(5s Use Time)</Text>
                    </View>
                    <View style={styles.healthItem}>
                        <Text style={styles.healthName}>Ultimate Accelerant</Text>
                        <Text style={styles.healthBenefit}>Restores 20% Ultimate</Text>
                        <Text style={styles.healthTime}>(7s Use Time)</Text>
                    </View>
                </ScrollView>
            </View>
            </>
        );
    }
}

export default HealthPage;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center'
    },
    healingHeader: {
        color: 'white',
        fontSize: 25,
    },
    healthItem: {
        alignItems: 'center',
        flex: 1,
        width: WIDTH*0.8,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'white',
        margin: 10,
        padding: 10,
    },
    healthName: {
        color: 'white',
    },
    healthBenefit: {   
        color: 'white',
    },
    healthTime: {
        color: 'white',
    },

})