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
import constants from '../constants/constants';
import SIZES from '../constants/SIZES';


const IconButton = ({
    containerStyle,
    icon,
    iconStyle,
    onPress
})=>{
    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                ...containerStyle
            }}
            onPress={onPress}
        >
            <Image 
                source={icon}
                style={{
                    width : 30,
                    height : 30,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});

export default IconButton;