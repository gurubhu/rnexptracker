import React, { useContext } from 'react';
import { View, StyleSheet} from 'react-native';
import { Text, Button } from "@rneui/themed";
import Spacer from '../components/Spacer';
import { SafeAreaView } from 'react-navigation';

import { Context as AuthContext } from '../context/AuthContext';

const AddBalanceScreen = ()=>{

    const { signout } = useContext(AuthContext);


    return (
        <Text>Add Balance Screen</Text>
    )
}

const styles = StyleSheet.create({});

export default AddBalanceScreen;