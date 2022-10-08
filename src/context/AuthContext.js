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
        navigate('TrackList');
    }
    else{
        navigate('Signup');
    }
}

const clearErrorMessage = dispatch => ()=>{
    dispatch({ type : 'clear_error_message' })
}

const signup = dispatch =>{
    return async ({ email, password })=>{
        //console.log(email,password);
        // make api request to sign up with email and password
        try {
             //if sign up successful, modify our state and say that we are authenticated.
            const response = await trackerApi.post('/signup', { email, password });
            await AsyncStorage.setItem('token', response.data.token);
            dispatch( { type : 'signup' , payload : response.data.token });
            // navigate to main flow
            navigate('TrackList');
        } catch (error) {
            // if sign up failed,we need to show error message
            dispatch({ type: 'add_error', payload : 'Something went wrong with sign up.'})
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
           navigate('TrackList');
       } catch (error) {
           // if sign up failed,we need to show error message
           dispatch({ type: 'add_error', payload : 'Something went wrong with sign in.'})
       }  
    }
}


const signout = dispatch => async ()=>{
    await AsyncStorage.removeItem('token');
    //await AsyncStorage.clear();
    dispatch({ type : 'signout' });
    navigate('loginFlow');
}




export const { Context, Provider} = createDataContext(
    authReducer,  
    { signin, signout, signup, clearErrorMessage, tryLocalSignin }, 
    { token : null , errorMessage: ''}
);