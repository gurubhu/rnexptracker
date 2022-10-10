import React,{ useState, useRef } from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Text
} from 'react-native';

import Footer from '../components/Footer';
import FirstWalkThroughScreen from './FirstWalkThroughScreen';
import SecondWalkThroughScreen from './SecondWalkThroughScreen';
import ThirdWalkThroughScreen from './ThirdWalkThroughScreen';
import FourthWalkThroughScreen from './FourthWalkThroughScreen';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';
import constants from '../constants/constants';



const WalkthroughScreen = ({ navigation }) => {

    const scrollX = React.useRef(new Animated.Value(0)).current;
    
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
                                { index === 1 && <SecondWalkThroughScreen />}
                                { index === 2 && <ThirdWalkThroughScreen />}
                                { index === 3 && <FourthWalkThroughScreen />}
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
            <Footer scrollX={scrollX} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.light
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