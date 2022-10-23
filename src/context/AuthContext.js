import AsyncStorage from '@react-native-async-storage/async-storage';
import JWT from 'expo-jwt';
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
        case 'signout':
                return { token : null, errorMessage : ''};
        default :
           return state;
    }
}

const tryLocalSignin = dispatch => async ()=>{
    
    const token = await AsyncStorage.getItem('token');
    let userName='';
    if(token){
        const result= JWT.decode(token, 'MY_SECRET_KEY');
        //console.log('tryLocalSignin', result);
        dispatch({ type : 'signin', payload : token });
        userName = result.userName;
        navigate('Home');
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
            let userName='';
             //if sign up successful, modify our state and say that we are authenticated.
            const response = await trackerApi.post('/signup', { name, email, password, selectedTermsAndCondition });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch( { type : 'signup' , payload : response.data.token });
            // navigate to main flow
            const result= JWT.decode(response.data.token, 'MY_SECRET_KEY');
            userName= result.userName;
            navigate('Home');
        } catch (error) {
            //console.log('SignUP Error2',error.response);
            // if sign up failed,we need to show error message
            //if(error.response.data)
            //dispatch({ type: 'add_error', payload : error.response.data.error })
            console.log(error)
        }       
    }
}

const signin = (dispatch) =>{
    return async ({ email, password })=>{
        try {
            let userName='';
            //if sign up successful, modify our state and say that we are authenticated.
           const response = await trackerApi.post('/signin', { email, password });
           await AsyncStorage.setItem('token', response.data.token);
           dispatch( { type : 'signin' , payload : response.data.token });
           // navigate to main flow
           const result= JWT.decode(response.data.token, 'MY_SECRET_KEY');
           //console.log('signin', result);
           userName= result.userName;
           navigate('Home');
       } catch (error) {
           // if sign up failed,we need to show error message
          // if(error.response.data)
           //dispatch({ type: 'add_error', payload : error.response.data.error })
           console.log(error)
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