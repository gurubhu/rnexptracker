import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import COLORS from '../constants/COLORS';

const BackArrow = ({ navigation , navigationText})=>{
    return (
        <View>
            <Ionicons 
                name="arrow-back" 
                size={40} 
                color={COLORS.primary} 
                onPress={()=> navigation.navigate(`${navigationText}`)}
            />
        </View>
    )
}

export default BackArrow;