import AsyncStorage from '@react-native-async-storage/async-storage';
import trackerApi from '../api/tracker';

export const fetchAccountDetails1 = async (setAccountDetails)=>{
    try {
        //if fetching account details is successful, modify our state
        const token = await AsyncStorage.getItem('token');
        if(token){
           const response = await trackerApi.get('/account',{
               headers :{
                   Authorization : `Bearer ${token}`
               }
           });
           setAccountDetails(response.data);
        }
   } catch (error) {
       console.log(error.message);
   }   
}