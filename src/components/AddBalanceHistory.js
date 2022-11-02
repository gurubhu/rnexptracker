import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from 'react-native';

import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';
import icons from '../constants/icons';

import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const addBalanceHistory = [
    {
        id: 1,
        description: "Sold Ethereum",
        amount: -2.0034,
        currency: "ETH",
        type: "S",      // S - Sold, B - Bought
        date: "14:20 12 Apr"
    },
    {
        id: 2,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
    {
        id: 3,
        description: "Bought Ethereum",
        amount: 2.0034,
        currency: "ETH",
        type: "B",
        date: "14:20 12 Apr"
    },
]

const AddBalanceHistory = ()=>{

    const renderItem = ({item})=>(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems : 'center',
                //paddingVertical : SIZES.base
            }}

            onPress={()=> console.log(item)}
        >
            <MaterialCommunityIcons name="currency-inr" size={24} color={COLORS.secondary} />
            
            <View style={{ flex : 1, marginLeft: SIZES.radius }}>
                <Text style={{...FONTS.h3}}>{item.description}</Text>
                <Text style={{ color : COLORS.gray, ...FONTS.body4}}>{item.date}</Text>
            </View>
            <View style={{ flexDirection : 'row', height: "100%", alignItems: 'center'}}>
                <Text style={{ color : item.type === "B" ? COLORS.green : COLORS.black, ...FONTS.h4}}>{item.amount} {item.currency}</Text>
                <AntDesign name="arrowright" size={20} color={COLORS.primary} />
            </View>
        </TouchableOpacity>
    )

    return <View
    style={{
        marginHorizontal : SIZES.padding,
        backgroundColor : COLORS.white,
        ...styles.shadow
    }}>
        <Text style={{...FONTS.h2, color: COLORS.primary, marginHorizontal: SIZES.padding }}>Add Balance History</Text>
        <FlatList 
                contentContainerStyle={{
                    marginTop : SIZES.radius
                }}
                scrollEnabled={false}
                data={addBalanceHistory}
                keyExtractor={item=> `${item.id}`}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={()=>{
                    return (
                        <View style={{ width: "100%", height: 1, backgroundColor: COLORS.secondary}}>

                        </View>
                    )
                }}
            />   
    </View>
}

const styles = StyleSheet.create({
    shadow : {
        shadowColor : "#000",
        shadowOffset :{
            width : 0,
            height : 4
        },
        shadowOpacity : 0.30,
        shadowRadius : 4.65,
        elevation : 8
    }
})

export default AddBalanceHistory;