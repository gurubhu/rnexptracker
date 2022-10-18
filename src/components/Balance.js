import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { FontAwesome, Feather  } from '@expo/vector-icons';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';

const Balance = ({ balance, navigation })=>{

  if(balance === undefined) return null;

  return (
    <>
        {
            balance == 0 ?
            <View style={styles.container}>
                <View style={{flexDirection : 'row'}}>
                    <Text style={styles.addBalance}>
                        Add Balance 
                    </Text>
                    <View style={{marginTop : 10}}>
                        <FontAwesome name="plus-circle" size={25} color={COLORS.primary} onPress={()=> navigation.navigate('AddBalance')} style={{ marginLeft : 10}}/>
                    </View>
                </View>
            </View>
            :
            <View style={styles.container}>
                <Text style={styles.message}> Your Current Balance</Text>
                <Text style={styles.balance}>
                <FontAwesome name="rupee" size={25} color={COLORS.secondary} />
                <View style={{ width : 20 }}></View>
                {balance}
                <View style={{ width : 20 }}></View>
                <FontAwesome name="plus-circle" size={30} color={COLORS.primary} onPress={()=> navigation.navigate('AddBalance')} />
                </Text>       
                <Text style={styles.change}><FontAwesome name="rupee" size={12} color={COLORS.primary} /> 540 change in  Last 24 hours</Text>
            </View>
        }
    </>
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
    },
    addBalance:{
        color : COLORS.primary, 
        ...FONTS.h2, 
        marginTop: SIZES.base,
        //paddingRight : SIZES.base,
        marginHorizontal : SIZES.base 
    }
});

export default Balance;