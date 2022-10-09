import React from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';


import SIZES from '../constants/SIZES';
import images from '../constants/images'


const FourthWalkThroughScreen = ()=>{

    return (
        <View style={styles.container}>
            <Image 
                source={images.walkthrough_04_01}
                style={{
                    ...styles.image,
                    top: '35%',
                    left : '35%',
                    width : 106,
                    height : 161,
                    zIndex : 1
                }}
            />

            <Image 
                source={images.walkthrough_04_02}
                style={{
                    ...styles.image,
                    top: '60%',
                    left : '60%'
                }}
            />

            <Image 
                source={images.walkthrough_04_03}
                style={{
                    ...styles.image,
                    top: '30%',
                    left : '15%'
                }}
            />

            <Image 
                source={images.walkthrough_04_04}
                style={{
                    ...styles.image,
                    top: '60%',
                    left : '18%'
                }}
            />
            <Image 
                source={images.luggage_01}
                style={{
                    ...styles.image,
                    top: '30%',
                    left : '58%'
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image :{
        position : 'absolute',
        width : 86,
        height : 112,
        zIndex : 0,
        borderRadius : SIZES.radius
    },
    container:{
        flex : 1,
        overflow : 'hidden'
    }
});

export default FourthWalkThroughScreen;