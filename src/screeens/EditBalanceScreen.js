import React, { useEffect , useContext, useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import BackArrow from '../components/BackArrow';

import { Ionicons } from '@expo/vector-icons';

import Loader from '../components/Loader';
import Balance from '../components/Balance';
import FormInput from '../components/FormInput';
import TextButton from '../components/TextButton';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';

import { Context as AccountContext} from '../context/AccountContext';
import { FontAwesome, MaterialIcons} from '@expo/vector-icons';


const EditBalanceScreen = ({ navigation }) => {

    const { state} = useContext(AccountContext);

    const [amount, setAmount] = useState(0);


    return (
        <View style={styles.container}>
            <BackArrow navigation={navigation} navigationText="AddBalanceHistory"/>
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
    amountContainerStyle:{
        marginTop: SIZES.radius,
        borderRadius : SIZES.radius,
        backgroundColor: COLORS.error
    },
});

export default EditBalanceScreen;

