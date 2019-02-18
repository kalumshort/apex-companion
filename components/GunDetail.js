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

    const source1 = {uri: item.gun1.img}

    return(
        <>
        <View style={styles.container}>
            <ScrollView>
               <View>
                   <Text style={styles.gunType}>{item.guntype}</Text>
                   {/* <Image

                       source={source}
                       style={styles.image}
                   /> */}
                   {item.gun1 ? 
                   <>
                    <Text style={styles.gunName}>{item.gun1.name}</Text>
                    <Image source={source1}
                            style={styles.image}
                    />
                   </>
                   :
                   <Text></Text>
                   }
                   {item.gun2 ? 
                   <Text style={styles.gunName}>{item.gun2.name}</Text>
                   :
                   <Text></Text>
                   }
                   {item.gun3 ? 
                   <Text style={styles.gunName}>{item.gun3.name}</Text>
                   :
                   <Text></Text>
                   }
                   {item.gun4 ? 
                   <Text style={styles.gunName}>{item.gun4.name}</Text>
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

  
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

  const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    },
    image: {
        width: WIDTH*1,
        height: HEIGHT*0.2,
    },
    gunType: {
        color:'white',
        fontSize: 40,
        fontWeight: '100',
    },
    gunName: {
        color: 'white',
    }
    
});
