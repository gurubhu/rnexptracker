import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { MaterialIcons,AntDesign  } from '@expo/vector-icons';


import SIZES from '../constants/SIZES';
import COLORS from '../constants/COLORS';
import FONTS from '../constants/FONTS';

const Category = ({item})=>{
    return(
        <View style={styles.container}>
                <View>
                {/* <AntDesign name="disconnect" size={25} color={COLORS.primary}/> */}
                <AntDesign name="bank" size={30} color={COLORS.primary} />
                </View>
                <View style={styles.textContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.description}>{item.description}</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{ 
        flexDirection : 'row'
    },
    image:{
        marginTop: 5,
        width: 25,
        height : 25
    },
    textContainer:{ 
        marginLeft : SIZES.base
    },
    title:{
        ...FONTS.h4,
        color : COLORS.primary
    },
    description:{
        ...FONTS.body5,
        color : COLORS.dark60,
        marginHorizontal: 10,
        fontWeight: 'bold'
    },
    code:{ 
        color: COLORS.grey, 
        ...FONTS.body3
    }
});

export default Category;