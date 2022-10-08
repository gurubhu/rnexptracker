import React from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Text
} from 'react-native';

import TextButton from '../components/TextButton';
import Footer from '../components/Footer';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';
import constants from '../constants/constants';
import FirstWalkThroughScreen from './FirstWalkThroughScreen';

const WalkthroughScreen = () => {

    const scrollX = React.useRef(new Animated.Value(0)).current;

    const Dots = ()=>{

        const dotPosition = Animated.divide(scrollX, SIZES.width);
                
        return (
           <View style={styles.dotContainer}>
               {
                   constants.walkthrough.map((item, index)=>{

                       const dotColor = dotPosition.interpolate({
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
        )
    }

    return (
        <View style={styles.container}>
            <Animated.FlatList 
                data={constants.walkthrough}
                keyExtractor={(item) => item.id}
                horizontal
                snapToInterval={SIZES.width}
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent : { contentOffset : {x : scrollX } } }],
                    {
                        useNativeDriver: false
                    }
                )}

                renderItem={({item, index}) =>{
                    return (
                        <View style={styles.listContainer}>
                            {/* Walkthrough Images  */}
                            <View style={styles.imageContainer}>
                                { index === 0 && <FirstWalkThroughScreen />}
                            </View>
                            {/* Title And Description */}
                            <View style={styles.titleContainer}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.subTitle}>{item.sub_title}</Text>
                            </View>
                        </View>
                    )
                }}
            />
            <Footer Dots={Dots}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.light
    },
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
    subTitle:{
        marginTop: SIZES.radius,
        textAlign: 'center',
        ...FONTS.body3, 
        color: COLORS.grey
    },
    title:{
        ...FONTS.h1
    },
    titleContainer:{
        height : SIZES.height * 0.35,
        alignItems : 'center',
        justifyContent : 'flex-start',
        paddingHorizontal : SIZES.padding
    },
    imageContainer :{
        flex : 1,
        justifyContent : 'center'
    },
    listContainer :{
        width : SIZES.width,
        justifyContent : 'center'
    }
});

export default WalkthroughScreen;