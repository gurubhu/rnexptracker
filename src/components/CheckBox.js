import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import icons from '../constants/icons';


const CheckBox = ({ containerStyle, isSelected, onPress })=>{
    return (
        <TouchableOpacity style={{...styles.container,...containerStyle }}
            onPress={onPress}
        >
            <View style={{...styles.checkbox,borderColor : isSelected ? COLORS.primary : COLORS.grey,
                            backgroundColor : isSelected ? COLORS.primary : null}}
            >
                {
                    isSelected &&
                    <Image 
                        source={icons.checkmark}
                        style={styles.image}
                    />
                }
            </View>
            <Text style={styles.text}>
                By registering, you agree to our Terms and Conditions.
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row'
    },
    checkbox:{
        width : 25,
        height : 25,
        alignItems : 'center',
        borderRadius : SIZES.base,
        borderWidth : 3
    },
    image:{
        width: 20,
        height : 20,
        tintColor : COLORS.light
    },
    text:{
        flex :1,
        marginLeft : SIZES.base,
        ...FONTS.body5,
        lineHeight : 20
    }
});

export default CheckBox;