import React from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

import TextButton from './TextButton';
import Dots from './Dots';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';


const Footer = ({ scrollX })=>{

    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
        <View style={styles.footerContainer}>
            <Dots dotPosition={dotPosition}/>
            {/* Buttons  */}
            <View style={styles.buttonsContainer}>
                <TextButton 
                    label="Join Now"
                    contentContainerStyle={{
                        flex : 1,
                        borderRadius : SIZES.radius,
                        backgroundColor : COLORS.lightGrey
                    }}
                    labelStyle={{
                        color : COLORS.primary,
                        ...FONTS.h3
                    }}
                />
                <TextButton 
                    label="Log In"
                    contentContainerStyle={{
                        flex : 1,
                        marginLeft: SIZES.radius,
                        borderRadius : SIZES.radius,
                        backgroundColor : COLORS.primary
                    }}
                    labelStyle={{
                        ...FONTS.h3
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer :{
        position: 'absolute',
        bottom : 0,
        left:0,
        right : 0,
        height : SIZES.height * 0.2,
        alignItems: 'center',
        justifyContent:'space-between',
        paddingHorizontal : SIZES.padding,
        paddingVertical : SIZES.height > 700 ? SIZES.padding : 20
     },
     buttonsContainer :{
        flexDirection : 'row',
        height : 55
    }
});

export default Footer;