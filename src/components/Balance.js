import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';

const Balance = ({ balance })=>{
  return (
    <View style={styles.container}>
        <Text style={styles.message}> Your Current Balance</Text>       
        <Text style={styles.balance}>
            <FontAwesome name="rupee" size={30} color={COLORS.secondary} /> 
            {balance} 
            <FontAwesome name="plus-circle" size={30} color={COLORS.primary} onPress={()=> console.log('Add Balance')} style={{ marginLeft : 10}}/>
        </Text>
        <Text style={styles.change}><FontAwesome name="rupee" size={12} color={COLORS.primary} /> 540 change in  Last 24 hours</Text>
    </View>   
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent : 'center' 
    },
    message:{
        color : COLORS.primary, 
        ...FONTS.h3
    },
    balance:{
        color : COLORS.secondary, 
        ...FONTS.h1, 
        marginTop: SIZES.base,
        paddingRight : SIZES.base,
        marginLeft : SIZES.base
    },
    change:{ 
        color : COLORS.primary, 
        ...FONTS.body5 
    }
});

export default Balance;