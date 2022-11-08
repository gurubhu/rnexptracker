import React,{ useState, useEffect } from 'react';
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome} from '@expo/vector-icons';

import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';

import Category from './Category';
import Loader from './Loader';

const Categories = ()=>{
    const [category, setCategory] = useState([]);

    const getCategories = async ()=>{
        const token = await AsyncStorage.getItem('token');
            if(token){
                const response = await trackerApi.get('/category',{
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });
                setCategory(response.data);
            }
    }

    useEffect(()=>{
        getCategories();
    },[]);

    const renderItem = ({item, index})=>(
        <TouchableOpacity style={{...styles.cardContainer, marginLeft: index === 0 ? SIZES.padding : 0}}>
            <Category item={item}/>
            {/* Value */}
            <View style={{ marginTop : SIZES.radius, marginLeft: SIZES.base * 5 }}>
                <Text style={{...FONTS.h4, color : COLORS.secondary, justifyContent:'center', alignItems: 'center'}}>
                    <FontAwesome name="rupee" size={15} color={COLORS.secondary} />
                    <View style={{ width : 5 }}></View>
                     {item.amount}
                </Text>
            </View>
        </TouchableOpacity>
    )
    
    if(category.length === 0) return <Loader />

    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row',justifyContent: 'space-between', marginRight: SIZES.padding}}>
                <Text style={styles.text}>Categories</Text>
                <FontAwesome 
                    name="plus-circle" 
                    size={25} color={COLORS.primary} 
                    onPress={()=> console.log('AddCategory')} 
                    style={{ marginLeft : 10}}
                />
            </View>
            <FlatList 
                contentContainerStyle={styles.list}
                data={category}
                renderItem={renderItem}
                keyExtractor={item => `${item._id}`}
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
        borderRadius: 15,
        borderWidth: 2,
        borderColor : COLORS.dark20,
        backgroundColor:COLORS.white
    }
});

export default Categories;

