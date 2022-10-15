import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';

import { Context as AuthContext} from '../context/AuthContext';

const HomeHeader = ({name})=>{
    
    const { signout } = useContext(AuthContext);
    
    return (
        <View style={{flexDirection : 'row',marginTop : SIZES.padding * 2, justifyContent: 'space-between', marginHorizontal: SIZES.padding}}>
            <View>
                <Text style={{...FONTS.h2, color : COLORS.primary}}>Hello, {name}</Text>
                <Text style={{...FONTS.h4, color : COLORS.secondary, marginVertical : SIZES.base * 2 }}>Welcome back to your expense tracker</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.image}
                    onPress={()=> signout()}
                >
                    <MaterialIcons name="logout" size={30} color={COLORS.primary} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop : SIZES.padding * 2,
        width : "100%",
        alignItems:"flex-end",
        paddingHorizontal : SIZES.padding
    },
    container1:{
        marginTop : SIZES.padding * 2,
        width : "100%",
        alignItems:"flex-start",
        paddingHorizontal : SIZES.padding
    },
    image:{
        width : 35,
        height : 35,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default HomeHeader;