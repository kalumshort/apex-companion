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
                    <View style={styles.healingItems}>
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
                    </View>
                    <View style={styles.shieldItems}>
                        <Text style={styles.shieldHeader}>Shield Items</Text>
                        <View style={styles.sheildItem}>
                            <Text style={styles.shieldName}>Body Shield</Text>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityCommon}>Common</Text>
                                    <Text style={styles.shieldBenefit}>Absorbs 50 Damage</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityRare}>Rare</Text>
                                    <Text style={styles.shieldBenefit}>Absorbs 75 Damage</Text>
                                </View>
                            </View>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityEpic}>Epic</Text>
                                    <Text style={styles.shieldBenefit}>Absorbs 100 Damage</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityLegend}>Legendary</Text>
                                    <Text style={styles.shieldBenefit}>Absorbs 100 Damage</Text>
                                    <Text style={styles.shieldBenefit}>Finishing Moves Fully Restore Shield</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sheildItem}>
                            <Text style={styles.shieldName}>Helmet</Text>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityCommon}>Common</Text>
                                    <Text style={styles.shieldBenefit}>30% Headshot Damage Reduction</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityRare}>Rare</Text>
                                    <Text style={styles.shieldBenefit}>40% Headshot Damage Reduction</Text>
                                </View>
                            </View>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityEpic}>Epic</Text>
                                    <Text style={styles.shieldBenefit}>50% Headshot Damage Reduction</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityLegend}>Legendary</Text>
                                    <Text style={styles.shieldBenefit}>50% Headshot Damage Reduction</Text>
                                    <Text style={styles.shieldBenefit}>Reduces Tactical and Ultimate Ability Recharge Times</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sheildItem}>
                            <Text style={styles.shieldName}>Knockdown Shield</Text>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityCommon}>Common</Text>
                                    <Text style={styles.shieldBenefit}>Blocks 100 Damage</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityRare}>Rare</Text>
                                    <Text style={styles.shieldBenefit}>Blocks 250 Damage</Text>
                                </View>
                            </View>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityEpic}>Epic</Text>
                                    <Text style={styles.shieldBenefit}>Blocks 750 Damage</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityLegend}>Legendary</Text>
                                    <Text style={styles.shieldBenefit}>Blocks 750 Damage</Text>
                                    <Text style={styles.shieldBenefit}>Self=Resurrects when downed</Text>
                                    <Text style={styles.shieldBenefit}>(1 Time Use)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.sheildItem}>
                            <Text style={styles.shieldName}>Backpack</Text>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityCommon}>Common</Text>
                                    <Text style={styles.shieldBenefit}>2 Extra Inventory Slots</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityRare}>Rare</Text>
                                    <Text style={styles.shieldBenefit}>4 Extra Inventory Slots</Text>
                                </View>
                            </View>
                            <View style={styles.rarityContainer}>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityEpic}>Epic</Text>
                                    <Text style={styles.shieldBenefit}>6 Extra Inventory Slots</Text>
                                </View>
                                <View style={styles.rarity}>
                                    <Text style={styles.rarityLegend}>Legendary</Text>
                                    <Text style={styles.shieldBenefit}>6 Extra Inventory Slots</Text>
                                    <Text style={styles.shieldBenefit}>Healing and Sheilding Consumables take 50% less time</Text>
                                </View>
                            </View>
                        </View>
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
        backgroundColor: 'black',
        alignItems: 'center'
    },
    healingHeader: {
        textAlign: 'center',
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
    shieldItems: {

    },
    shieldHeader: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    sheildItem: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        margin: 10,
        padding: 10,
    },
    shieldName: {
        textAlign: 'center',
        color: 'white',

    },
    rarityContainer: {
        alignItems: 'center',
    },
    rarity: {
        alignItems: 'center',
        width: WIDTH*0.70,
        marginTop: 5,
        marginBottom: 5,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        
    },
    rarityCommon: {
        color: 'grey',
    },
    rarityRare: {
        color: 'blue',
    },
    rarityEpic: {
        color: 'purple',
    },
    rarityLegend: {
        color: '#FFD700',
    },
    shieldBenefit: {
        textAlign: 'center',
        color: 'white',
    },

})