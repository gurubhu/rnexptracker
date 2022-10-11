import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

import TextButton from './TextButton';

import FONTS from '../../constants/FONTS';
import COLORS from '../../constants/COLORS';
import SIZES from '../../constants/SIZES';

const AuthFooter = ({ mode, setMode })=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                { mode === 'signIn' ? "Don't have an account?" : "I already have an account."}
            </Text>
            <TextButton 
               label={mode === 'signIn' ? "Create New Account": "Sign In"}
               contentContainerStyle={styles.contentContainerStyle}
               labelStyle={styles.labelStyle}
               onPress={()=> mode === 'signIn' ? setMode('signUp'): setMode('signIn')}
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