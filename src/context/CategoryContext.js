import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker';
import JWT from 'expo-jwt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigation/NavigationRef';

const categoryReducer = (state, action)=>{
    
    switch(action.type){
        case 'fetch_categories':
            return { categories : action.payload, errorMessage : '' };
        default :
            return state;
    }
}

const getCategories = dispatch => async ()=>{
    try {
        const token = await AsyncStorage.getItem('token');
        const result= JWT.decode(token, 'MY_SECRET_KEY');
        userName = result.userName;
        if(token){
           const response = await trackerApi.get('/category',{
               headers :{
                   Authorization : `Bearer ${token}`
               }
           });
           dispatch({ type: 'fetch_categories', payload : {...response.data, userName} })
        }
   } catch (error) {
    dispatch({ type: 'add_error'})
   }   
}

export const { Context, Provider} = createDataContext(
    categoryReducer,  
    { getCategories }, 
    {}
);