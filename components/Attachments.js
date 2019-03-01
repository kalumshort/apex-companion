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



class AttachmentsPage extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <View style={styles.attachments}>
                    <Text style={styles.attTitle}>Attachments</Text>
                    <View style={styles.attachment}>
                        <Text style={styles.attName}>Magazine</Text>
                        <Text style={styles.attBracket}>(Heavy & Light)</Text>
                        <View style={styles.attTable}>
                            <View style={styles.rarity}>
                                <Text style={styles.common}>Common</Text>
                                <Text style={styles.rare}>Rare</Text>
                                <Text style={styles.epic}>Epic</Text>
                            </View>
                            <View style={styles.benefits}>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+ Ammo Capacity</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>++ Ammo Capacity</Text>
                                    <Text style={styles.benefitText}>+ Fast Reloads</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+++ Ammo Capacity</Text>
                                    <Text style={styles.benefitText}>++ Fast Reloads</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.attachment}>
                        <Text style={styles.attName}>Barrel Stabilizer</Text>
                        <View style={styles.attTable}>
                            <View style={styles.rarity}>
                                <Text style={styles.common}>Common</Text>
                                <Text style={styles.rare}>Rare</Text>
                                <Text style={styles.epic}>Epic</Text>
                            </View>
                            <View style={styles.benefits}>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+ Recoil Reduction</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>++ Recoil Reduction</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+++ Recoil Reduction</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.attachment}>
                        <Text style={styles.attName}>Stock</Text>
                        <Text style={styles.attBracket}>(Standard & Sniper)</Text>
                        <View style={styles.attTable}>
                            <View style={styles.rarity}>
                                <Text style={styles.common}>Common</Text>
                                <Text style={styles.rare}>Rare</Text>
                                <Text style={styles.epic}>Epic</Text>
                            </View>
                            <View style={styles.benefits}>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+ Handling</Text>
                                    <Text style={styles.benefitText}>+ Reduce Aim Drift</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>++ Handling</Text>
                                    <Text style={styles.benefitText}>++ Reduce Aim Drift</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+++ Handling</Text>
                                    <Text style={styles.benefitText}>+++ Reduce Aim Drift</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.attachment}>
                        <Text style={styles.attName}>Shotgun Bolt</Text>
                        <View style={styles.attTable}>
                            <View style={styles.rarity}>
                                <Text style={styles.common}>Common</Text>
                                <Text style={styles.rare}>Rare</Text>
                                <Text style={styles.epic}>Epic</Text>
                            </View>
                            <View style={styles.benefits}>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+ Fire Rate</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>++ Fire Rate</Text>
                                </View>
                                <View style={styles.benefit}>
                                    <Text style={styles.benefitText}>+++ Fire Rate</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            </>
        );
    }
}

export default AttachmentsPage;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        alignItems: 'center'
    },
    attTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    attachments: {

    },
    attachment: {

    },
    attName: {
        textAlign: 'center',
        color:'white',
        fontSize: 19,
    },
    attBracket: {
        color: 'white',
        textAlign: 'center',
    },
    attTable: {

    },
    rarity: {
        flexDirection: 'row',
    },
    common: {
        color: 'grey',
        width: WIDTH*0.33,
        textAlign: 'center',
        fontSize: 19,

    },
    rare: {
        color:'blue',
        width: WIDTH*0.33,
        textAlign: 'center',
        fontSize: 19,


    },
    epic: {
        color: 'purple',
        width: WIDTH*0.33,
        textAlign: 'center',
        fontSize: 19,


    },
    benefits: {
        flexDirection: 'row',
    },
    benefit: {
        width:WIDTH*0.33,
    },
    benefitText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',

    }
})