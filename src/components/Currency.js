import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';


import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';

const Currency = ({item})=>{
    return(
        <View style={styles.container}>
                <View>
                    <MaterialIcons name="category" size={20} color={COLORS.primary} />
                </View>
                <View style={styles.textContainer}>
                        <Text style={styles.currency}>{item.currency}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flexDirection : 'row'
    },
    image:{
        marginTop: 5,
        width: 25,
        height : 25
    },
    textContainer:{ 
        marginLeft : SIZES.base
    },
    currency:{
        ...FONTS.h4,
        color : COLORS.primary
    },
    code:{ 
        color: COLORS.grey, 
        ...FONTS.body3
    }
});

export default Currency;