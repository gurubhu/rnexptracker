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
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                ...containerStyle
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width : 25,
                    height : 25,
                    alignItems : 'center',
                    borderRadius : SIZES.base,
                    borderWidth : 3,
                    borderColor : isSelected ? COLORS.primary : COLORS.grey,
                    backgroundColor : isSelected ? COLORS.primary : null
                }}
            >
                {
                    isSelected &&
                    <Image 
                        source={icons.checkmark}
                        style={{
                            width: 20,
                            height : 20,
                            tintColor : COLORS.light
                        }}
                    />
                }
            </View>
            <Text
                style={{
                    flex :1,
                    marginLeft : SIZES.base,
                    ...FONTS.body5,
                    lineHeight : 20
                }}
            >
                By registering, you agree to our Terms and Conditions and that you have read our Data Use Policy.
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});

export default CheckBox;