import React,{useState} from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Animated,
    View
} from 'react-native';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import constants from '../constants/constants';
import SIZES from '../constants/SIZES';


const Dots = (scrollX)=>{
    const [dotPositon, setDotPosition] = useState(Animated.divide(scrollX, SIZES.width));
    //const dotPosition = Animated.divide(scrollX, SIZES.width);
    <View style={styles.dotContainer}>
               {
                   constants.walkthrough.map((item, index)=>{

                       const dotColor = dotPositon.interpolate({
                           inputRange : [index -1, index, index + 1],
                           outputRange : [COLORS.dark08, COLORS.primary, COLORS.dark08],
                           extrapolate : "clamp"
                       })
                       
                       
                       return (
                           <Animated.View 
                                key={`dot-${index}`}
                                style={{...styles.dots, backgroundColor: dotColor}}
                           />
                       )
                   })
               }
           </View> 
}

const styles = StyleSheet.create({
    dotContainer:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    dots :{
        borderRadius : 5,
        marginHorizontal : 6,
        width : 10,
        height : 10
    },
});

export default Dots;