import React from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';


import SIZES from '../constants/SIZES';
import images from '../constants/images'


const SecondWalkThroughScreen = ()=>{

    return (
        <View style={styles.container}>
            <Image 
                source={images.walkthrough_02_01}
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
                source={images.walkthrough_02_02}
                style={{
                    ...styles.image,
                    top: '60%',
                    left : '60%'
                }}
            />

            <Image 
                source={images.walkthrough_02_03}
                style={{
                    ...styles.image,
                    top: '30%',
                    left : '15%'
                }}
            />

            <Image 
                source={images.walkthrough_02_04}
                style={{
                    ...styles.image,
                    top: '60%',
                    left : '18%'
                }}
            />
            <Image 
                source={images.walkthrough_02_05}
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

export default SecondWalkThroughScreen;