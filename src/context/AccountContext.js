import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import JWT from 'expo-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const accountReducer = (state, action)=>{
    switch(action.type){
        case 'fetch_account_details':
            return { accountDetails : action.payload, errorMessage : '' };
        case 'clear_account_details':
            return {errorMessage: '', accountDetails : {}};
        case 'add_error':
            return { errorMessage: 'Unable to fetch balance.', accountDetails : {}};
        default :
            return state;
    }
}


const fetchAccountDetails = dispatch => async ()=>{
    try {
        //if fetching account details is successful, modify our state
        dispatch({ type: 'clear_account_details'})
        const token = await AsyncStorage.getItem('token');
        const result= JWT.decode(token, 'MY_SECRET_KEY');
        userName = result.userName;
        if(token){
           const response = await trackerApi.get('/account',{
               headers :{
                   Authorization : `Bearer ${token}`
               }
           });
           dispatch({ type: 'fetch_account_details', payload : {...response.data, userName} })
        }
   } catch (error) {
    dispatch({ type: 'add_error'})
   }   
}

export const { Context, Provider} = createDataContext(
    accountReducer,  
    { fetchAccountDetails }, 
    { errorMessage: '', accountDetails : {} }
);