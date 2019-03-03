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
                <ScrollView>
                    {/* Attachments for the guns */}
                    <View style={styles.attachments}>
                        {/* Title for the attachments */}
                        <Text style={styles.attTitle}>Attachments</Text>
                        {/* Each Attachment */}
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
                                        <Text style={styles.benefitText}> ++ Ammo Capacity</Text>
                                        <Text style={styles.benefitText}>+ Fast Reload</Text>
                                    </View>
                                    <View style={styles.benefit}>
                                        <Text style={styles.benefitText}>+++ Ammo Capacity</Text>
                                        <Text style={styles.benefitText}>++ Fast Reload</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/* Each Attachment */}
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
                        {/* Each Attachment */}
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
                        {/* Each Attachment */}
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
                        {/* HOP-UP Attachments */}
                        <View style={styles.hopcontainer}>
                            <Text style={styles.attTitle}>Hop-Up Attachments</Text>
                             {/* Skullpiercer */}
                            <View style={styles.hopup}>
                                <Text style={styles.hopupName}>Skullpiercer Rifling</Text>
                                <Text style={styles.hopupEffectTitle}>Effect</Text>
                                <Text style={styles.hopupEffect}>Increase headshot damage</Text>
                                <Text style={styles.hopupAppTitle}>Applicable Weapons</Text>
                                <Text style={styles.hopupAppWeapons}>Wingman, Longbow</Text>
                            </View>
                            {/* Selectfire */}
                            <View style={styles.hopup}>
                                <Text style={styles.hopupName}>Selectfire Receiver</Text>
                                <Text style={styles.hopupEffectTitle}>Effect</Text>
                                <Text style={styles.hopupEffect}>Switch between fire modes</Text>
                                <Text style={styles.hopupAppTitle}>Applicable Weapons</Text>
                                <Text style={styles.hopupAppWeapons}>Prowler, Havok</Text>
                            </View>
                            {/* Precision */}
                            <View style={styles.hopup}>
                                <Text style={styles.hopupName}>Precision Choke</Text>
                                <Text style={styles.hopupEffectTitle}>Effect</Text>
                                <Text style={styles.hopupEffect}>Reduces the projectile spread</Text>
                                <Text style={styles.hopupAppTitle}>Applicable Weapons</Text>
                                <Text style={styles.hopupAppWeapons}>Peacekeeper, Triple Take</Text>
                            </View>
                            {/* Turbocharger */}
                            <View style={styles.hopup}>
                                <Text style={styles.hopupName}>Turbocharger</Text>
                                <Text style={styles.hopupEffectTitle}>Effect</Text>
                                <Text style={styles.hopupEffect}>Reduces spin-up time</Text>
                                <Text style={styles.hopupAppTitle}>Applicable Weapons</Text>
                                <Text style={styles.hopupAppWeapons}>Devotion, Havok</Text>
                            </View>
                        </View>
                        {/* Optic Attachments */}
                        <View style={styles.opticContainer}>
                            <Text style={styles.opticHeader}>Optic Attachments</Text>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>1x Holo</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>All Weapons</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>1x-2x Variable Holo</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>All Weapons</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>1x HCOG (Classic)</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>All Weapons</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>2x HCOG (Bruiser)</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>All Weapons</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>3x HCOG (Ranger)</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>All Weapons</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>2x-4x Variable AOG</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>Snipers, LMGs, AR, SMGs</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticNameLegend}>1x Digital Threat</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>Shotguns, SMGs, Pistols</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>6x Sniper</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>Sniper</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticName}>4x-8x Sniper</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>Sniper</Text>
                            </View>
                            <View style={styles.optic}>
                                <Text style={styles.opticNameLegend}>4x-10x Digital Sniper Threat</Text>
                                <Text style={styles.opticWeaponsTitle}>Applicable Weapons</Text>
                                <Text style={styles.opticWeapons}>Sniper</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
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
        backgroundColor: 'black',
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
        width: WIDTH*0.9,
        borderWidth:1,
        borderColor: 'white',
        borderRadius: 5,
        margin: 10,
    },
    attName: {
        textAlign: 'center',
        color:'white',
        fontSize: 19,
        margin: 5,
        // textDecorationLine: 'underline',
    },
    attBracket: {
        color: 'white',
        textAlign: 'center',
    },
    attTable: {

    },
    rarity: {
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20,
    },
    common: {
        color: 'grey',
        width: WIDTH*0.3,
        textAlign: 'center',
        fontSize: 19,

    },
    rare: {
        color:'blue',
        width: WIDTH*0.3,
        textAlign: 'center',
        fontSize: 19,


    },
    epic: {
        color: 'purple',
        width: WIDTH*0.3,
        textAlign: 'center',
        fontSize: 19,


    },
    benefits: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    benefit: {
        width:WIDTH*0.3,
        padding: 5,
    },
    benefitText: {
        color: 'white',
        fontSize: 10,
        textAlign: 'center',

    },
    hopcontainer: {
        alignItems: 'center',

    },
    hopup: {
        width: WIDTH*0.8,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
    hopupName:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '900',

    },
    hopupEffectTitle: {
        color: 'white', 
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '900',
        marginTop: 10,

    }, 
    hopupEffect: {
        color: '#E20808',
        textAlign: 'center',
        fontStyle: 'italic',


    },
    hopupAppTitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '900',
        marginTop:10,


    },
    hopupAppWeapons: {
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',

    },
    opticContainer: {
        alignItems: 'center',
    },
    opticHeader: {
        color: 'white',
        fontSize: 25,
        borderBottomWidth: 1,
        borderColor: 'white',
    },
    optic: {
        width: WIDTH*0.8,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        alignItems: 'center',
        padding: 10,
        margin: 10,
    },
    opticName: {
        color: 'white',
        fontSize: 19,
        margin: 5,

    },
    opticNameLegend: {
        color: '#FFD700',
        fontSize: 19,
        margin: 5,
    },
    opticWeaponsTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '900',

    },
    opticWeapons: {
        color: '#E20808',
        margin: 5,

    }, 
})