import React, { useEffect, useState, useContext } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/COLORS';

import HomeHeader from '../components/HomeHeader';
import { NavigationContext } from 'react-navigation';

const AddBalanceScreen = ({ navigation })=>{

//console.log(navigation.goBack())
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ marginTop : 30, marginLeft: 15}} >
                    <Ionicons name="arrow-back" size={40} color={COLORS.primary} onPress={()=> navigation.navigate('Home')}/>
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
});

export default AddBalanceScreen;