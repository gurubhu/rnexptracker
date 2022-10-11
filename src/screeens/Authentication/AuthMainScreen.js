import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';

import SignIn from './../../components/SignIn';
import SignUp from './../../components/SignUp';
import AuthFooter from './../../components/AuthFooter';

import COLORS from '../../constants/COLORS';
import SIZES from '../../constants/SIZES';


const AuthMainScreen = ()=>{

    const [mode, setMode] = React.useState("signIn")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [confirmPassword, setConfirmPassword] = React.useState("")
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false)
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = React.useState(false)
    const [termsChecked, setTermsChecked]= React.useState(false)
 
    return (
        <View style={styles.container}>
            {/* Logo */}
            <SimpleLineIcons 
                name="wallet" size={50} 
                color={COLORS.primary} 
                style={styles.image}
            />
            {/* Auth Container */}
            <View style={{
                zIndex : 1
            }}>
                {/* {renderAuthContainer()} */}
                { mode === 'signIn' ? 
                    <SignIn 
                        email={email} setEmail={setEmail} 
                        password={password} setPassword = {setPassword} 
                        isPasswordVisible={isPasswordVisible} setIsPasswordVisible={setIsPasswordVisible}
                    />
                    : 
                    <SignUp 
                        email={email} setEmail={setEmail} 
                        password={password} setPassword = {setPassword} 
                        isPasswordVisible={isPasswordVisible} setIsPasswordVisible={setIsPasswordVisible} 
                        name={name} setName={setName}
                        confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword}
                        isConfirmPasswordVisible={isConfirmPasswordVisible} setIsConfirmPasswordVisible={setIsConfirmPasswordVisible}
                        termsChecked={termsChecked} setTermsChecked={setTermsChecked}
                    />
                }
            </View>
            {/* Auth Container Footer */}
            <AuthFooter mode={mode} setMode={setMode}/>
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
    }
});

export default AuthMainScreen;