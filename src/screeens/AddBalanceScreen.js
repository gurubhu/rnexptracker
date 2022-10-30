import React, { useEffect , useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Loader from '../components/Loader';
import Balance from '../components/Balance';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';
import icons from '../constants/icons';

import { Context as AccountContext} from '../context/AccountContext';
import { FontAwesome, MaterialIcons} from '@expo/vector-icons';



const AddBalanceScreen = ({ navigation }) => {

    const { fetchAccountDetails, state, addError, addBalance } = useContext(AccountContext);
    

    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('')

    useEffect(()=>{
        fetchAccountDetails();
    },[]);

    if(!state.accountDetails.userName) return <Loader />

    return (
        <View style={styles.container}>
            <View>
                <Ionicons name="arrow-back" size={40} color={COLORS.primary} onPress={()=> navigation.navigate('Home')}/>
            </View>
            <Balance navigation={navigation} state={state} />
            <View style={{...styles.authContainer,...styles.shadow}}>
                { 
                    state.errorMessage && 
                    <Text style={styles.error}>{state.errorMessage}</Text>
                }
                <FormInput 
                        containerStyle={styles.amountContainerStyle}
                        placeholder="Enter New Amount"
                        value={amount}
                        onChange={setAmount}
                        prependComponent={
                            <View style={{marginRight : SIZES.base}}>
                                <FontAwesome name="rupee" size={25} color={COLORS.secondary} />
                            </View>
                        }
                        keyboardType="decimal-pad"
                />
                <FormInput 
                        containerStyle={styles.amountContainerStyle}
                        placeholder="Enter Short Description"
                        value={description}
                        onChange={setDescription}
                        prependComponent={
                            <View style={{marginRight : SIZES.base}}>
                                <MaterialIcons name="description" size={25} color={COLORS.secondary} />
                            </View>
                        }
                />
                <TextButton 
                    label="Add Balance"
                    contentContainerStyle={styles.loginContainerStyle}
                    labelStyle={styles.loginLabelStyle}
                    onPress={()=>{
                        if(!amount) return addError('Enter Amount');
                        if(!description) return addError('Enter Description');
                        addBalance({ amount, description });
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop : SIZES.padding * 1.5,
        height : SIZES.height * 0.75,
        marginLeft : SIZES.padding
    },
    authContainer :{
        flex : 1,
        width : SIZES.width - (SIZES.padding * 2),
        padding : SIZES.padding,
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.light,
        zIndex : 1,
        marginTop : SIZES.base * 5
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
    balance:{
        lineHeight : 45,
        color : COLORS.dark,
        ...FONTS.h2
    },
    balanceContainer :{
        marginBottom : SIZES.padding
    },
    emailImage:{
        width : 25,
        height : 25,
        marginRight : SIZES.base
    },
    loginContainerStyle:{
        height: 55,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary,
        marginTop : 125
    },
    loginLabelStyle:{
        ...FONTS.h3
    },
    amountContainerStyle:{
        marginTop: SIZES.radius,
        borderRadius : SIZES.radius,
        backgroundColor: COLORS.error
    },
    descContainerStyle : {
        marginTop: SIZES.radius,
        borderRadius : SIZES.radius,
        //backgroundColor: COLORS.error,
        height : 135
    },
    textinput:{
        flex : 1,
        paddingVertical : 0,
        ...FONTS.body3
    },
    error:{
        ...FONTS.body3,
        color : COLORS.error,
        marginVertical: SIZES.radius
    }
})

export default AddBalanceScreen;