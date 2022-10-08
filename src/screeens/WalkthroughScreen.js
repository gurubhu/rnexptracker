import React from 'react';
import {
    View,
    Animated,
    StyleSheet,
    Text
} from 'react-native';

import TextButton from '../components/TextButton';

import COLORS from '../constants/COLORS';
import images from '../constants/images';
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

    function renderFooter(){
        return (
            <View style={styles.footerContainer}>
                <Dots />
                {/* Buttons  */}
                <View style={styles.buttonsContainer}>
                    <TextButton 
                        label="Join Now"
                        contentContainerStyle={{
                            flex : 1,
                            borderRadius : SIZES.radius,
                            backgroundColor : COLORS.lightGrey
                        }}
                        labelStyle={{
                            color : COLORS.primary,
                            ...FONTS.h3
                        }}
                    />
                    <TextButton 
                        label="Log In"
                        contentContainerStyle={{
                            flex : 1,
                            marginLeft: SIZES.radius,
                            borderRadius : SIZES.radius,
                            backgroundColor : COLORS.primary
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}
                    />
                </View>
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
                        <View
                            style={{
                                width : SIZES.width,
                                justifyContent : 'center'
                            }}
                        >
                            {/* Walkthrough Images  */}
                            <View
                                style={{
                                    flex : 1,
                                    justifyContent : 'center'
                                }}
                            >
                                { index === 0 && <FirstWalkThroughScreen />}

                            </View>

                            {/* Title And Description */}

                            <View
                                style={{
                                    height : SIZES.height * 0.35,
                                    alignItems : 'center',
                                    justifyContent : 'flex-start',
                                    paddingHorizontal : SIZES.padding
                                }}
                            >

                                <Text style={{...FONTS.h1}}>{item.title}</Text>
                                <Text style={{marginTop: SIZES.radius,textAlign: 'center',...FONTS.body3, color: COLORS.grey}}>{item.sub_title}</Text>
                            </View>
                        </View>
                    )

                }}
            />
            {renderFooter()}
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.light
    },
    footerContainer :{
       position: 'absolute',
       bottom : 0,
       left:0,
       right : 0,
       height : SIZES.height * 0.2,
       alignItems: 'center',
       justifyContent:'space-between',
       paddingHorizontal : SIZES.padding,
       paddingVertical : SIZES.height > 700 ? SIZES.padding : 20
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
    buttonsContainer :{
        flexDirection : 'row',
        height : 55
    }
});

export default WalkthroughScreen;