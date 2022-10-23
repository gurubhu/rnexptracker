import React, { useEffect, useState, useContext } from 'react';
import {
    StyleSheet,
    LogBox,
    ScrollView,
    View,
    Text
} from 'react-native';

import HomeHeader from '../../components/HomeHeader';
import Balance from '../../components/Balance';
import Loader from '../../components/Loader';



import { Context as AccountContext} from '../../context/AccountContext';

const HomeScreen = ({ navigation}) => {

    const { fetchAccountDetails, state } = useContext(AccountContext);
    
    useEffect(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        fetchAccountDetails();
    },[]);


   if(!state.accountDetails.userName) return <Loader />

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ width : "100%", height : 290,...styles.shadow}} >
                        <HomeHeader name={state.accountDetails.userName} />
                            <Balance navigation={navigation} state={state}
                            />
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