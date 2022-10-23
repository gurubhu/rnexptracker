import React from "react";
import { View , StyleSheet} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import COLORS from "../constants/COLORS";

const Loader = ()=>{
    return(
        <View style={styles.loading}>
            <AntDesign name="loading1" size={48} color={COLORS.primary} />
        </View>
    )
}

const styles = StyleSheet.create({
    loading:{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    }
});

export default Loader;