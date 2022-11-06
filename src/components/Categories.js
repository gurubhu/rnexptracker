import React,{ useState } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';

import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';

import Currency from './Currency';

const trendingCurrencies = [
    {
        id: 1,
        currency: "Monthly Expense",
        amount: "29,455.74"
    },
    {
        id: 2,
        currency: "Groceries",
        amount: "919.03"
    },
    {
        id: 3,
        currency: "Electricity Bill",
        amount: "118.33"
    },
    {
        id: 4,
        currency: "Travelling",
        amount: "4567.33"
    }
]

const Categories = ()=>{
    const [category, setCategory] = useState(trendingCurrencies);

    const renderItem = ({item, index})=>(
        <TouchableOpacity style={{...styles.cardContainer, marginLeft: index === 0 ? SIZES.padding : 0}}>
            <Currency item={item}/>
            {/* Value */}
            <View style={{ marginTop : SIZES.radius }}>
                <Text style={{...FONTS.h4, color : COLORS.dark, justifyContent:'center', alignItems: 'center'}}>{item.amount}</Text>
            </View>
        </TouchableOpacity>
    )

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Categories</Text>
            <FlatList 
                contentContainerStyle={styles.list}
                data={category}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
                horizontal
                showsHorizontalScrollIndicator={false}
        />
        </View>
    )
}

const styles = StyleSheet.create({
    container : { 
        
    },
    text:{ 
        marginLeft : SIZES.padding, 
        color : COLORS.primary, 
        ...FONTS.h2
    },
    list:{
        marginTop : SIZES.base
    },
    cardContainer:{
        width : 220,
        paddingVertical: SIZES.padding,
        paddingHorizontal : SIZES.padding,
        marginRight: SIZES.radius,
        borderRadius: 10,
        backgroundColor:COLORS.secondary60
    }
});

export default Categories;

