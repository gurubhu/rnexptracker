import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    LogBox,
    ScrollView,
    View,
    Text
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../../api/tracker';

import HomeHeader from '../../components/HomeHeader';
import Balance from '../../components/Balance';

import { fetchAccountDetails1 } from '../../context/AccountContext';

const HomeScreen = ({ navigation}) => {
    const [accountDetails, setAccountDetails] = useState({});
    
    let userName = ''
    
    if(navigation.state.params.userName){
        userName = navigation.state.params.userName
    }

    useEffect(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        fetchAccountDetails1(setAccountDetails)
    },[]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ width : "100%", height : 290,...styles.shadow}} >
                        <HomeHeader name={userName} />
                        <Balance balance={accountDetails.amount} navigation={navigation}/>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex : 1, 
        paddingBottom : 130, 
        backgroundColor: 'white'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    background: {
        flex : 1,
        alignItems : 'center'
    }
})

export default HomeScreen;