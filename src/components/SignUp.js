import React,{ useState, useContext } from 'react';
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

import { validateEmail } from '../constants/Utility';

import { Context as AuthContext} from '../context/AuthContext';

const SignUp = ()=>{

    const { signup, state } = useContext(AuthContext);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [termsChecked, setTermsChecked] = useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
    const [name, setName] = useState("")
    const [errorMessage, setErrorMessage] = useState('');

    return(
        <View style={{
            marginTop : SIZES.padding,
            height : SIZES.height * 0.74
        }}>
            
            <View style={{...styles.authContainer,...styles.shadow}}>
                <Text style={{
                    color : COLORS.dark,
                    ...FONTS.h2
                }}>
                    Create New Account
                </Text>
                { 
                    errorMessage && 
                    <Text style={styles.error}>{errorMessage}</Text>
                }
                { 
                    state.errorMessage && 
                    <Text style={styles.error}>{state.errorMessage}</Text>
                }
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

                    onPress={()=> {
                        if(!name) return setErrorMessage('Enter Your Name');
                        if(!email) return setErrorMessage('Enter Your Email');
                        if(!validateEmail(email)) return setErrorMessage('Invalid Email')
                        if(!password) return setErrorMessage('Enter Your Password');  
                        if(!confirmPassword) return setErrorMessage('Enter Confirm Password');
                        if(password !== confirmPassword) return setErrorMessage('Password and Confirm Password are different');
                        if(!termsChecked) return setErrorMessage('Please select Terms and Conditions.');
                        setErrorMessage('')
                        signup({name, email, password});
                    }}
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
    },
    error:{
        ...FONTS.body3,
        color : COLORS.error,
        marginVertical: SIZES.radius
    }
});

export default SignUp;