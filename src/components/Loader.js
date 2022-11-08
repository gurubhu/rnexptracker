import React from "react";
import { View , StyleSheet, ActivityIndicator} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import COLORS from "../constants/COLORS";

const Loader = ()=>{
    return(
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={50} color={COLORS.primary}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
});

export default Loader;