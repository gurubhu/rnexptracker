import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import IconButton from '../../components/IconButton';

import FONTS from '../../constants/FONTS';
import COLORS from '../../constants/COLORS';
import SIZES from '../../constants/SIZES';
import icons from '../../constants/icons';

const SignIn = ({
    email, setEmail, 
    password, setPassword, 
    isPasswordVisible, setIsPasswordVisible
})=>{

    return(
        <View style={styles.container}>               
            <View style={{...styles.authContainer,...styles.shadow}}>
                <Text style={styles.signin}>
                    Sign in to Outlay
                </Text>
                <View>
                    {/* Email */}
                    <FormInput 
                        containerStyle={styles.emailContainerStyle}
                        placeholder="Email"
                        value={email}
                        onChange={(text)=> setEmail(text)}
                        prependComponent={
                            <Image 
                                source={icons.email}
                                style={styles.emailImage}
                            />
                        }
                    />
                    {/* Password */}
                    <FormInput 
                        containerStyle={styles.emailContainerStyle}
                        placeholder="Password"
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        onChange={(text)=> setPassword(text)}
                        prependComponent={
                            <Image 
                                source={icons.lock}
                                style={styles.emailImage}
                            />
                        }
                        appendComponent={
                            <IconButton 
                                icon={ isPasswordVisible ? icons.eye_off : icons.eye}
                                iconStyle={{
                                    tintColor : COLORS.grey
                                }}
                                onPress={()=>setIsPasswordVisible(!isPasswordVisible)}
                            />
                        }
                    />
                    <View style={styles.forgotPasswordContainer}>
                            <TextButton 
                                label="Forgot Password?"
                                contentContainerStyle={styles.forgotPasswordContentContainerStyle}
                                labelStyle={styles.forgotPasswordLabelStyle}
                            />
                    </View>
                </View>
                <TextButton 
                    label="Log In"
                    contentContainerStyle={styles.loginContainerStyle}
                    labelStyle={styles.loginLabelStyle}
                    onPress={()=> console.log("Log in")}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop : SIZES.padding * 4.5,
        height : SIZES.height * 0.48,
        
    },
    signin:{
        lineHeight : 45,
        color : COLORS.dark,
        ...FONTS.h2
    },
    authContainer :{
        flex : 1,
        width : SIZES.width - (SIZES.padding * 2),
        padding : SIZES.padding,
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.light,
        zIndex : 1
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
    emailContainerStyle:{
        marginTop: SIZES.radius,
        borderRadius : SIZES.radius,
        backgroundColor: COLORS.error
    },
    emailImage:{
        width : 25,
        height : 25,
        marginRight : SIZES.base
    },
    forgotPasswordContainer:{
        alignItems: 'flex-end'
    },
    forgotPasswordContentContainerStyle: {
        marginVertical: SIZES.radius,
        backgroundColor : null
    },
    forgotPasswordLabelStyle:{
        color : COLORS.support3,
        ...FONTS.h4
    },
    loginContainerStyle:{
        height: 55,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.primary
    },
    loginLabelStyle:{
        ...FONTS.h3
    }
});

export default SignIn;