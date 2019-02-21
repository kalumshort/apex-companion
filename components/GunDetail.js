import React, { Component } from "react";
// Importing the packags needed from  react native 
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    TouchableHighlight, 
    ScrollView,
	Dimensions,
	Platform
     } from 'react-native';

import { Constants, WebBrowser } from 'expo';




const GunDetail = ({item}) => {

    return(
        <>
        <View style={styles.container}>
            <ScrollView>
               <View>
					{/* Checking if theres a object called gun 1. If so displaying the data */}
                   {item.gun1 ? 
						<>
							<View style={styles.gunContainer}>
								<Text style={styles.gunName}>{item.gun1.name}</Text>
								<Image 
									source={{uri: item.gun1.img}}
									style={styles.image}
								/>
								<View style={styles.textContainer}>
									<View style={styles.textLabel}>
										<Text style={styles.text}>Ammo Type:</Text>
										<Text style={styles.text}>Fire-Rate:</Text>
										<Text style={styles.text}>Mag-Size:</Text>
										<Text style={styles.text}>Head Damage:</Text>
										<Text style={styles.text}>Body Damage:</Text>
									</View>
									<View style={styles.textItems}>
										<Text style={styles.textItem}>{item.gun1.ammotype}</Text>
										<Text style={styles.textItem}>{item.gun1.firerate}</Text>
										<Text style={styles.textItem}>{item.gun1.magsize}</Text>
										<Text style={styles.textItem}>{item.gun1.headdamage}</Text>
										<Text style={styles.textItem}>{item.gun1.bodydamage}</Text>
									</View>
								</View>
							</View>
						</>
                   :
                   <Text></Text>
                   }
					{/* Checking if theres a object called gun 2. If so displaying the data */}
                   {item.gun2 ? 
						<>
							<View style={styles.gunContainer}>
								<Text style={styles.gunName}>{item.gun2.name}</Text>
								<Image
									source={{uri:item.gun2.img}}
									style={styles.image}
								/>
								<View style={styles.textContainer}>
									<View style={styles.textLabel}>
										<Text style={styles.text}>Ammo Type:</Text>
										<Text style={styles.text}>Fire-Rate:</Text>
										<Text style={styles.text}>Mag-Size:</Text>
										<Text style={styles.text}>Head Damage:</Text>
										<Text style={styles.text}>Body Damage:</Text>
									</View>
									<View style={styles.textItems}>
										<Text style={styles.textItem}>{item.gun2.ammotype}</Text>
										<Text style={styles.textItem}>{item.gun2.firerate}</Text>
										<Text style={styles.textItem}>{item.gun2.magsize}</Text>
										<Text style={styles.textItem}>{item.gun2.headdamage}</Text>
										<Text style={styles.textItem}>{item.gun2.bodydamage}</Text>
									</View>
								</View>
							</View>
						</>
                   :
                   <Text></Text>
                   }
					{/* Checking if theres a object called gun 3. If so displaying the data */}
                   {item.gun3 ? 
						<>
								<View style={styles.gunContainer}>
									<Text style={styles.gunName}>{item.gun3.name}</Text>
									<Image
										source={{uri:item.gun3.img}}
										style={styles.image}
									/>
									<View style={styles.textContainer}>
										<View style={styles.textLabel}>
											<Text style={styles.text}>Ammo Type:</Text>
											<Text style={styles.text}>Fire-Rate:</Text>
											<Text style={styles.text}>Mag-Size:</Text>
											<Text style={styles.text}>Head Damage:</Text>
											<Text style={styles.text}>Body Damage:</Text>
										</View>
										<View style={styles.textItems}>
											<Text style={styles.textItem}>{item.gun3.ammotype}</Text>
											<Text style={styles.textItem}>{item.gun3.firerate}</Text>
											<Text style={styles.textItem}>{item.gun3.magsize}</Text>
											<Text style={styles.textItem}>{item.gun3.headdamage}</Text>
											<Text style={styles.textItem}>{item.gun3.bodydamage}</Text>
										</View>
									</View>
								</View>
						</>
                   :
                   <Text></Text>
                   }
					{/* Checking if theres a object called gun 4. If so displaying the data */}
                   {item.gun4 ? 
						<>
								<View style={styles.gunContainer}>
									<View style={styles.gunContainerInner}>
										<Text style={styles.gunName}>{item.gun4.name}</Text>
										<Image
											source={{uri:item.gun4.img}}
											style={styles.image}
										/>
										<View style={styles.textContainer}>
											<View style={styles.textLabel}>
												<Text style={styles.text}>Ammo Type:</Text>
												<Text style={styles.text}>Fire-Rate:</Text>
												<Text style={styles.text}>Mag-Size:</Text>
												<Text style={styles.text}>Head Damage:</Text>
												<Text style={styles.text}>Body Damage:</Text>
											</View>
											<View style={styles.textItems}>
												<Text style={styles.textItem}>{item.gun4.ammotype}</Text>
												<Text style={styles.textItem}>{item.gun4.firerate}</Text>
												<Text style={styles.textItem}>{item.gun4.magsize}</Text>
												<Text style={styles.textItem}>{item.gun4.headdamage}</Text>
												<Text style={styles.textItem}>{item.gun4.bodydamage}</Text>
											</View>
										</View>
									</View>
								</View>
						</>
                   :
                   <Text></Text>
                   }
               </View>
            </ScrollView>
        </View>
        </>
    );
}

  export default GunDetail;

// Checking to see the size dimensions of the screen
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

// Styling for the page
  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
	},
	gunContainer: {
		backgroundColor: '#282727',
		alignItems: 'center',
		padding: 10,
        margin: 10,
        borderRadius: 4,
        borderWidth: 0,
        borderColor: 'transparent',
		elevation: 10,
		shadowOpacity: 1,

	},
	gunContainerInner: {
		flex: 1,

	},
    image: {
        width: WIDTH*0.9,
		height: HEIGHT*0.2,
    },
    gunName: {
		color: 'white',
		textAlign:'center',
		fontSize: 30,
		fontWeight: '100',
		fontStyle: 'italic',
		marginTop: 20,
		marginBottom:20,
	},
	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop:30,
		marginBottom: 30,
	},
	text: {
		color: 'white',
		fontSize: 20,
	},
	textItem: {
		color: 'white',
		fontSize: 20,
		fontStyle:'italic',
	},
	textLabel: {
		alignItems: 'center',
	},
	textItems: {
		alignItems: 'center',
	},
    
});
