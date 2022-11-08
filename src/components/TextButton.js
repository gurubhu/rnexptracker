import React from 'react';
import {
    TouchableOpacity,
    Text
} from 'react-native';

import Loader from './Loader';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';

const TextButton = ({
    contentContainerStyle,
    disabled,
    label,
    labelStyle,
    onPress
}) => {

    if(label === 'Log In' && disabled) return <Loader />
    if(label === 'Create Account' && disabled) return <Loader />

    return (
        <TouchableOpacity
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                ...contentContainerStyle
            }}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.h3, ...labelStyle }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default TextButton;