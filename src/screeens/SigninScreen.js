import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';


import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext} from '../context/AuthContext';


const SigninScreen = ({ navigation })=>{
    
    const { state, signin, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
               onWillFocus={clearErrorMessage}
                //onDidFocus={()=>{}}
                //onWillBlur={clearErrorMessage}
                //onDidBlur={()=>{}}
            />
            <AuthForm 
                headerText="Sign In for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign In"
                onSubmit={ signin }
            />
            <NavLink 
                text="Don't have an account? Sign Up"
                routeName="Signup"
            />
            
        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
};


const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 150
    }
});

export default SigninScreen;