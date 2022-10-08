import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

import { Context as AuthContext} from '../context/AuthContext';


const SignupScreen = ({ navigation })=>{
    
    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
               onWillFocus={clearErrorMessage}
                //onDidFocus={()=>{}}
                //onWillBlur={clearErrorMessage}
                //onDidBlur={()=>{}}
            />
            <AuthForm 
                headerText="Sign Up for Tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up"
                onSubmit={ signup }
            />
            <NavLink 
                text="Already have an account? Sign In"
                routeName="Signin"
            />
            
        </View>
    )
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;