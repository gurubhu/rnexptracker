import React, { useEffect, useState, useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../api/tracker';

import { Ionicons, AntDesign,FontAwesome  } from '@expo/vector-icons';

import Balance from '../components/Balance';
import Loader from '../components/Loader';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';

import { Context as AccountContext} from '../context/AccountContext';


const AddBalanceHistoryScreen = ({ navigation })=>{

    const { state, getBalance, fetchAccountDetails } = useContext(AccountContext);
    
    const [addBalanceHistory, setAddBalanceHistory] = useState([]);

    const getBalance1 = async ()=>{
        const token = await AsyncStorage.getItem('token');
        if(token){
            const response = await trackerApi.get('/account',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            setAddBalanceHistory(response.data);
        }
    }

    useEffect(()=>{
        getBalance1();
        // fetchAccountDetails();
        // getBalance();
    },[]);

    if(!state.accountDetails) return <Loader />



    const renderItem = ({item})=>(
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                alignItems : 'center',
                paddingVertical : SIZES.base
            }}
        >
            <View style={{ flex : 1, marginLeft: SIZES.radius }}>
                <Text style={{...FONTS.h3, color : COLORS.primary}}>{item.description}</Text>
                <Text style={{ color : COLORS.secondary, ...FONTS.body4}}>{new Date(item.date).toLocaleDateString("en-US")}</Text>
            </View>
            <View style={{ flexDirection : 'row', height: "100%", alignItems: 'flex-start'}}>
                <Text style={{ color : COLORS.primary, ...FONTS.h4}}>
                    <FontAwesome name="rupee" size={12} color={COLORS.primary}/>
                     {item.amount.toFixed(2)}
                </Text>
                <AntDesign name="edit" size={24} color={COLORS.primary} />
            </View>
        </TouchableOpacity>
    )

    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Ionicons name="arrow-back" size={40} color={COLORS.primary} onPress={()=> navigation.navigate('Home')}/>
                </View>
                <Balance navigation={navigation} state={state} />
            </View>
            {addBalanceHistory.length > 0 ? <SafeAreaView
                style={{
                    marginVertical : SIZES.padding,
                    marginHorizontal : SIZES.padding,
                    padding : 20,
                    borderRadius : SIZES.radius,
                    backgroundColor : COLORS.white,
                    ...styles.shadow
                }}
            >
                <Text style={{...FONTS.h2, color: COLORS.dark, borderBottomWidth : 1}}>Add Balance History</Text>
                <FlatList 
                    contentContainerStyle={{
                        marginTop : SIZES.radius
                    }}
                    scrollEnabled={false}
                    data={addBalanceHistory}
                    keyExtractor={item=> `${item._id}`}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={()=>{
                    return (
                        <View style={{ width: "100%", height: 1, backgroundColor: COLORS.primary}}>

                        </View>
                    )
                }}
                />
            </SafeAreaView >: <Loader />}
        </ScrollView>
    )
}

const styles= StyleSheet.create({
    container:{
        marginTop : SIZES.padding * 1.5,
        marginLeft : SIZES.padding
    },
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

export default AddBalanceHistoryScreen;