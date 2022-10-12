import React,{ useState } from 'react';
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


const AuthMainScreen = ({ navigation })=>{

    const [mode, setMode] = useState("signIn")

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
                        navigation={navigation}
                    />
                    : 
                    <SignUp
                        navigation={navigation}
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