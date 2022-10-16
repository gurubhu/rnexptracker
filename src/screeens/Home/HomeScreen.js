import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    LogBox,
    ScrollView,
    View
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../../api/tracker';

import HomeHeader from '../../components/HomeHeader';
import Balance from '../../components/Balance';

const HomeScreen = ({ navigation}) => {
    const [accountDetails, setAccountDetails] = useState({});
    
    let userName = ''
    
    if(navigation.state.params.userName){
        userName = navigation.state.params.userName
    }

    const fetchAccountDetails = async ()=>{
        try {
            //if fetching account details is successful, modify our state
            const token = await AsyncStorage.getItem('token');
            if(token){
               const response = await trackerApi.get('/account',{
                   headers :{
                       Authorization : `Bearer ${token}`
                   }
               });
               setAccountDetails(response.data);
            }
       } catch (error) {
           console.log(error.message);
       }   
    }

    useEffect(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        fetchAccountDetails()
    },[]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ width : "100%", height : 290,...styles.shadow}} >
                        <HomeHeader name={userName} />
                        <Balance balance={accountDetails.amount}/>
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