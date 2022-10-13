import React, { useContext } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

import TextButton from './TextButton';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';

import { Context as AuthContext} from '../context/AuthContext';

const AuthFooter = ({ mode, setMode })=>{
    const { clearErrorMessage } = useContext(AuthContext);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                { mode === 'signIn' ? "Don't have an account?" : "I already have an account."}
            </Text>
            <TextButton 
               label={mode === 'signIn' ? "Create New Account": "Sign In"}
               contentContainerStyle={styles.contentContainerStyle}
               labelStyle={styles.labelStyle}
               onPress={()=> {
                   mode === 'signIn' ? setMode('signUp'): setMode('signIn')
                   clearErrorMessage()
                }}
            />
        </View>
   )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        height : 80,
        alignItems: 'flex-end',
        justifyContent : 'center',
        marginTop : -30,
        marginHorizontal: SIZES.radius,
        paddingBottom : SIZES.radius,
        borderBottomLeftRadius : SIZES.radius,
        borderBottomRightRadius : SIZES.radius,
        backgroundColor: COLORS.light60,
        zIndex: 0
    },
    text:{
        color : COLORS.grey,
        ...FONTS.body5  
    },
    contentContainerStyle:{
        marginLeft : SIZES.base,
        backgroundColor : null
    },
    labelStyle:{
        color : COLORS.support3,
        ...FONTS.h5
    }
});

export default AuthFooter;