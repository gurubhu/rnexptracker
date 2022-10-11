import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';

import TextButton from './TextButton';
import FormInput from './FormInput';
import IconButton from './IconButton';
import CheckBox from './CheckBox';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import icons from '../constants/icons';

const SignUp = ({
    name, setName, 
    email, setEmail, 
    password, setPassword, 
    isPasswordVisible, setIsPasswordVisible, 
    confirmPassword, setConfirmPassword, 
    termsChecked, setTermsChecked, 
    isConfirmPasswordVisible, setIsConfirmPasswordVisible
})=>{

    return(
        <View style={{
            marginTop : SIZES.padding,
            height : SIZES.height * 0.72
        }}>
            
            <View style={{...styles.authContainer,...styles.shadow}}>
                <Text style={{
                    color : COLORS.dark,
                    ...FONTS.h2
                }}>
                    Create New Account
                </Text>
                <View>
                    {/* Name */}
                    <FormInput 
                        containerStyle={{
                            borderRadius : SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        placeholder="Name"
                        value={name}
                        onChange={(text)=> setName(text)}
                        prependComponent={
                            <Image 
                                source={icons.person}
                                style={{
                                    width : 25,
                                    height : 25,
                                    marginRight: SIZES.base
                                }}
                            />
                        }
                    />
                    {/* Email */}
                    <FormInput 
                        containerStyle={{
                            marginTop: SIZES.radius,
                            borderRadius : SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        placeholder="Email"
                        value={email}
                        onChange={(text)=> setEmail(text)}
                        prependComponent={
                            <Image 
                                source={icons.email}
                                style={{
                                    width : 25,
                                    height : 25,
                                    marginRight: SIZES.base
                                }}
                            />
                        }
                    />
                    {/* Password */}
                    <FormInput 
                        containerStyle={{
                            marginTop: SIZES.radius,
                            borderRadius : SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        placeholder="Password"
                        value={password}
                        secureTextEntry={!isPasswordVisible}
                        onChange={(text)=> setPassword(text)}
                        prependComponent={
                            <Image 
                                source={icons.lock}
                                style={{
                                    width : 25,
                                    height : 25,
                                    marginRight : SIZES.base
                                }}
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
                    {/* Confirm Password */}
                    <FormInput 
                        containerStyle={{
                            marginTop: SIZES.radius,
                            borderRadius : SIZES.radius,
                            backgroundColor: COLORS.error
                        }}
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        secureTextEntry={!isConfirmPasswordVisible}
                        onChange={(text)=> setConfirmPassword(text)}
                        prependComponent={
                            <Image 
                                source={icons.lock}
                                style={{
                                    width : 25,
                                    height : 25,
                                    marginRight : SIZES.base
                                }}
                            />
                        }
                        appendComponent={
                            <IconButton 
                                icon={ isConfirmPasswordVisible ? icons.eye_off : icons.eye}
                                iconStyle={{
                                    tintColor : COLORS.grey
                                }}
                                onPress={()=>setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                            />
                        }
                    />
                    {/* Terms And Conditions */}
                    <CheckBox 
                        containerStyle={{
                            marginVertical: SIZES.radius
                        }}
                        isSelected={termsChecked}
                        onPress={()=> setTermsChecked(!termsChecked)}
                    />
                </View>
                <TextButton 
                    label="Create Account"
                    contentContainerStyle={{
                        height: 55,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    labelStyle={{
                        ...FONTS.h3
                    }}

                    onPress={()=> console.log("Create Account")}
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingHorizontal : SIZES.padding,
        backgroundColor : 'white',
        marginVertical : 10
    },
    image :{
        alignSelf :'center',
        marginTop : SIZES.padding * 2,
        width : 50,
        height : 50
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
    socialButtonContainer :{
        width: 55,
        height :55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.grey20
    }
});

export default SignUp;