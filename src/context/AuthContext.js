import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import { navigate } from '../navigation/NavigationRef';


const authReducer = (state, action)=>{
    switch(action.type){
        case 'signin':
            return { errorMessage: '', token : action.payload };
        case 'signup':
            return { errorMessage: '', token : action.payload };
        case 'add_error':
            return {...state, errorMessage : action.payload};
        case 'clear_error_message':
            return {...state, errorMessage : ''};
        case 'signout':
            return { token : null, errorMessage : ''};
        default :
           return state;
    }
}

const tryLocalSignin = dispatch => async ()=>{
    
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({ type : 'signin', payload : token });
        navigate('Account');
    }
    else{
        navigate('Welcome');
    }
}

const clearErrorMessage = dispatch => ()=>{
    dispatch({ type : 'clear_error_message' })
}

const signup = dispatch =>{
    return async ({ name, email, password })=>{

        // make api request to sign up with email and password
        try {
            const selectedTermsAndCondition = true;
             //if sign up successful, modify our state and say that we are authenticated.
            const response = await trackerApi.post('/signup', { name, email, password, selectedTermsAndCondition });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch( { type : 'signup' , payload : response.data.token });
            // navigate to main flow
            navigate('Account');
        } catch (error) {
            //console.log('SignUP Error2',error.response);
            // if sign up failed,we need to show error message
            dispatch({ type: 'add_error', payload : error.response.data.error })
        }       
    }
}

const signin = (dispatch) =>{
    return async ({ email, password })=>{
        try {
            //if sign up successful, modify our state and say that we are authenticated.
           const response = await trackerApi.post('/signin', { email, password });
           await AsyncStorage.setItem('token', response.data.token);
           dispatch( { type : 'signin' , payload : response.data.token });
           // navigate to main flow
           navigate('Account');
       } catch (error) {
           // if sign up failed,we need to show error message
           dispatch({ type: 'add_error', payload : error.response.data.error })
       }  
    }
}


const signout = dispatch => async ()=>{
    await AsyncStorage.removeItem('token');
    //await AsyncStorage.clear();
    dispatch({ type : 'signout' });
    navigate('AuthMain');
}

const addError = dispatch => async (errMessage)=>{
    dispatch({ type: 'add_error', payload : errMessage })
}




export const { Context, Provider} = createDataContext(
    authReducer,  
    { signin, signout, signup, clearErrorMessage, tryLocalSignin, addError }, 
    { token : null , errorMessage: ''}
);