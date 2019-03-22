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
// Importing the caousel of the battle pass items
import Season1Slider from './Season1Slider';

class Season1Page extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <>
            <View style={styles.container}>
                <ScrollView>
                    <Image
                    style={styles.headerImage}
                    source={{uri:"https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/03/apex-tout-small-homepage-octane-5x2-xl.jpg.adapt.crop5x2.1920w.jpg"}}
                    >
                    </Image>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerSeason}>Season 1</Text>
                        <Text style={styles.headerName}>(Wild Frontier)</Text>
                    </View>
                    <View style={styles.newItems}>
                        <View style={styles.newLegend}>
                            <Image
                                style={styles.newItemImage}
                                source={{uri:'https://media.contentapi.ea.com/content/dam/apex-legends/common/embed-images/apex-embed-season-1-new-legend.png'}}
                            />
                            <Text style={styles.newItemHeader}>NEW LEGEND</Text>
                            <Text style={styles.newItemBio}>Misfits, outcasts, drifters, and grifters – the Apex Games welcomes them all. Meet the newest Legend, Octane.</Text>
                        </View>
                        <View style={styles.newBattlePass}>
                            <Image
                                style={styles.newItemImage}
                                source={{uri: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/embed-images/apex-embed-season-1-battlepass.png'}}
                            />
                            <Text style={styles.newItemHeader}>BATTLE PASS AND BATTLE PASS BUNDLE</Text>
                            <Text style={styles.newItemBio}>Get over 100 items with the Battle Pass – fresh Legend skins, banner cards, and more are yours to earn as you play. Get them even faster with the Battle Pass Bundle.</Text>
                        </View>
                    </View>
                    <View style={styles.battlePass}>
                        <View style={styles.battlePassHeader}>
                            <ImageBackground
                                style={styles.battlePassHeaderImage}
                                source={{uri:'https://media.contentapi.ea.com/content/dam/apex-legends/common/apex-section-bg-battle-pass-top-hero-xl.jpg'}}
                            >
                                <Text style={styles.battlePassHeaderText}>SEASON 1 BATTLE PASS</Text>
                            </ImageBackground>
                        </View>
                        <View style={styles.pricingTags}>
                            <Image
                                style={styles.pricingTagImage}
                                source={{uri: 'https://i.ibb.co/8KFKMds/silver-Battle.jpg'}}
                            />
                            <Image 
                                style={styles.pricingTagImage}
                                source={{uri: 'https://i.ibb.co/YdCYp0T/gold-Battle.jpg'}}
                            />

                        </View>
                        <View style={styles.skins}>
                            <Text style={styles.skinsHeader}>WILD FRONTIER LEGEND SKINS</Text>
                            <Text style={styles.skinsBio}>Instantly unlock the Lifeline Revolutionary skin, the Wraith Survivor skin, and the Mirage Outlaw skin with purchase of the Battle Pass.</Text>
                            <Image
                                style={styles.skinsImage}
                                source={{uri: 'https://media.contentapi.ea.com/content/dam/apex-legends/common/embed-images/apex-embed-battle-pass-wild-frontier-skins.png'}}
                            />
                        </View>
                        <View style={styles.rewards}>
                            <Text style={styles.rewardsHeader}>BATTLE PASS REWARDS</Text>
                            <Text style={styles.rewardsBio}>Earn over 100 unique items throughout the season - everything you snap before the seasons over is yours to keep.</Text>
                            <View style={styles.carouselView}>
                                <Season1Slider/>
                            </View>
                        </View>
                        <View style={styles.freeRewards}>
                            <Text style={styles.freeRewardsHeader}>FREE REWARDS</Text>
                            <Text style={styles.freeRewardsBio}>Everyone who plays Apex Legends Season 1 can earn:</Text>
                            <View style={styles.freeRewardsImages}>
                                <Image
                                    style={styles.freeRewardsImage}
                                    source={{uri: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/03/apex-grid-tile-battle-pass-free-legend-skin.jpg.adapt.crop16x9.652w.jpg'}}
                                />
                                <Text style={styles.freeRewardsText}>1 Wild Frontier Legend Skin</Text>
                                <Image
                                    style={styles.freeRewardsImage}
                                    source={{uri: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/03/apex-grid-tile-battle-pass-free-lootbox.jpg.adapt.crop16x9.652w.jpg'}}
                                />
                                <Text style={styles.freeRewardsText}>5 Apex Packs</Text>
                                <Image
                                    style={styles.freeRewardsImage}
                                    source={{uri: 'https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/03/apex-grid-tile-battle-pass-free-stat-trackers.jpg.adapt.crop16x9.652w.jpg'}}
                                />
                                <Text style={styles.freeRewardsText}>18 Wild Fronteir Stat Trackers</Text>
                            </View>
                        </View>
                        <View style={styles.FAQ}>
                            <Text style={styles.FAQHeader}>BATTLE PASS FAQ</Text>
                            <Text style={styles.FAQQuestion}>How do I buy the Battle Pass</Text>
                            <Text style={styles.FAQAnswer}>The Battle Pass can only be purchased in the in-game store using Apex Coins. Launch Apex Legends, navigate to the Battle Pass tab, and purchase the Battle Pass from there. If you need to purchase Apex Coins, you can do that in the store, too.</Text>
                            <Text style={styles.FAQQuestion}>What happens if I buy my Battle Pass late in the season?</Text>
                            <Text style={styles.FAQAnswer}>You’ll receive all the rewards up to your Battle Pass level (which is your current level for the season) retroactively! For example, if you’re on level 20 for the season when you buy the Battle Pass, you’ll unlock all rewards for every level up to 20, plus three special Battle Pass skins.</Text>
                            <Text style={styles.FAQAnswer}>If you buy the Battle Pass Bundle, you’ll get the rewards for 25 levels in addition to the levels you’ve already reached. So, if you’re on level 20 for the season when you buy the Battle Pass Bundle, you’ll get all the rewards through level 45 and the three special Battle Pass skins.</Text>
                            <Text style={styles.FAQQuestion}>Can I keep leveling my Season 1 Battle Pass after the season ends?</Text>
                            <Text style={styles.FAQAnswer}>No, the rewards available in the Season 1 Battle Pass can only be earned until the season is over. After it ends, you won’t be able to earn new Wild Frontier content.</Text>
                            <Text style={styles.FAQQuestion}>Do I keep my stuff after the season ends?</Text>
                            <Text style={styles.FAQAnswer}>Yes! You keep every Battle Pass reward you’ve unlocked after the season is over.</Text>
                            <Text style={styles.FAQQuestion}>What if I don’t buy the Battle Pass? Can I still earn rewards for free?</Text>
                            <Text style={styles.FAQAnswer}>Yes. Even if you don’t purchase the Battle Pass, you can still earn the following items for free: </Text>
                            <Text style={styles.FAQAnswer}>
                            1 Wild Frontier Legend skin
                            5 Apex Packs
                            18 Wild Frontier stat trackers
                            </Text>
                            <Text style={styles.FAQQuestion}>If I buy the Battle Pass, can I also get the free rewards?</Text>
                            <Text style={styles.FAQAnswer}>Yes! Everyone can earn the free rewards during Season 1.</Text>
                            <Text style={styles.FAQAnswer}></Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            </>
        );
    }
}

export default Season1Page;


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    headerImage: {
        width: WIDTH*1,
        height: HEIGHT*0.2,
        marginTop: 10,
    },
    headerContainer: {
        alignItems: 'center',
    },
    headerSeason: {
        fontSize: 23,
        color: 'white',
        textAlign:'center',

    },
    headerName: {
        fontStyle: 'italic',
        color: 'white',
    },
    newItems: {
        alignItems: 'center',
    },
    newItemImage: {
        width: WIDTH*0.8,
        height: HEIGHT*0.3
    },
    newItemHeader: {
        color: 'white',
        marginTop: 20,
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
    },
    newItemBio: {  
        color: 'white',
        margin: 20,
        textAlign: 'center',

    },
    newLegend: {
        alignItems: 'center',

    },
    newBattlePass: {
        alignItems: 'center',
    },
    battlePass: {
        margin: 3,
        borderWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
        borderRadius: 5,
    },
    battlePassHeaderImage: {
        width: WIDTH*1,
        height: HEIGHT*0.3,
        justifyContent: 'center',
    },
    battlePassHeaderIcon: {
        width: WIDTH*0.2,
        height: HEIGHT*0.2,
    },
    battlePassHeaderText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 25,
        
    },
    pricingTags: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        
    },
    pricingTagImage: {
        width: WIDTH*0.4,
        height: HEIGHT*0.3,

    },
    skins: {
        alignItems: 'center',
    },
    skinsHeader: {
        color: 'white',
        marginTop: 10,
        fontSize: 25,
        fontWeight: '700',
        textAlign: 'center',
    },
    skinsBio: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        margin: 10,
    },
    skinsImage: {
        width: WIDTH*0.8,
        height: HEIGHT*0.2,
    },
    rewards: {
        // alignItems: 'center',
        backgroundColor: 'red',
        margin: 10,
        marginTop: 20,
        borderRadius: 5,
        
    },
    rewardsHeader: {
        color: 'white',
        fontSize: 25, 
        textAlign: 'center',
    },
    rewardsBio: {
        color: 'white',
        fontWeight: '100',
        textAlign: 'center',
    },
    carouselView: {
        backgroundColor: 'red',
    },
    freeRewards: {
        alignItems: 'center',
    },
    freeRewardsHeader: {
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    freeRewardsBio: {
        color: 'white',
        fontSize: 15,
        fontWeight: '100',
        textAlign: 'center',
        margin: 10,

    },
    freeRewardsImages: {

    },
    freeRewardsImage: {
        width: HEIGHT*0.4,
        height: HEIGHT*0.2
    },
    freeRewardsText:{
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        marginBottom: 20,
        marginTop:5,
    },
    FAQ: {
        alignItems: 'center',  
    },
    FAQHeader: {
        color: 'white',
        fontSize: 25,
    },
    FAQQuestion: {
        textAlign:'center',
        color: 'white',
        fontSize: 20,
        fontWeight: '900',
    },
    FAQAnswer: {
        color: 'white',
        fontSize: 15,
        fontStyle: 'italic',
        textAlign: 'center',
        margin: 5,
        fontWeight: '100',
    }
})