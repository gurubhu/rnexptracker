import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import JWT from 'expo-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigation/NavigationRef';

const accountReducer = (state, action)=>{
    switch(action.type){
        case 'fetch_account_details':
            return { accountDetails : action.payload, errorMessage : '' };
        case 'clear_account_details':
            return {errorMessage: '', accountDetails : {}};
        case 'add_error':
            return {...state, errorMessage : action.payload};
        case 'add_balance':
            return { accountDetails : action.payload, errorMessage : '' };
        case 'get_balance':
            return { ...state, addBalanceHistory: action.payload };
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
           const response = await trackerApi.get('/account/total',{
               headers :{
                   Authorization : `Bearer ${token}`
               }
           });
           //console.log('State',response.data);
           dispatch({ type: 'fetch_account_details', payload : {...response.data, userName} })
        }
   } catch (error) {
       //console.log('Error',error);
    dispatch({ type: 'add_error'})
   }   
}

const addError = dispatch => async (errMessage)=>{
    //console.log('AccountContext addErro called',errMessage)
    dispatch({ type: 'add_error', payload : errMessage })
}


const addBalance = (dispatch) =>{
    return async ({ amount, description})=>{
        try {
            //if fetching account details is successful, modify our state
            dispatch({ type: 'clear_account_details'})
            const token = await AsyncStorage.getItem('token');
            if(token){
               const response = await trackerApi.post('/account',{
                   amount,
                   description,
                   expenseType: "A"
               },{
                headers : {
                    Authorization : `Bearer ${token}`
                }
               });

               //console.log('AddBalance', response.data);
               dispatch({ type: 'add_balance', payload : response.data })
               navigate('Home');
            }
       } catch (error) {
        //console.log('AddBalance Error', error);
        dispatch({ type: 'add_error'})
       }
    }
}

const getBalance = (dispatch) =>{
    return async ()=>{
        try {
            //if fetching account details is successful, modify our state
            dispatch({ type: 'clear_account_details'})
            const token = await AsyncStorage.getItem('token');
            if(token){
               const response = await trackerApi.get('/account',{
                headers : {
                    Authorization : `Bearer ${token}`
                }
               });

               dispatch({ type: 'get_balance', payload : response.data })
               //navigate('Home');
            }
       } catch (error) {
        //console.log('AddBalance Error', error);
        dispatch({ type: 'add_error'})
       }
    }
}

export const { Context, Provider} = createDataContext(
    accountReducer,  
    { fetchAccountDetails, addError, addBalance, getBalance}, 
    { errorMessage: '', accountDetails : {} }
);