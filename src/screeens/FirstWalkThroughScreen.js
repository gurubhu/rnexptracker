import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Image
} from 'react-native';

import { FlatList } from "react-native-gesture-handler";

import SIZES from '../constants/SIZES';
import constants from '../constants/constants';

const ITEM_WIDTH = 120;

const FirstWalkThroughScreen = ()=>{

    const [firstRowImages, setFirstRowImages] = useState([
        ...constants.walkthrough_01_01_images,
        ...constants.walkthrough_01_01_images
    ]);

    const [firstRowcurrentPosition, setFirstRowCurrentPosition] = useState(0);

    const [secondRowImages, setSecondRowImages] = useState([
        ...constants.walkthrough_01_02_images,
        ...constants.walkthrough_01_02_images
    ]);

    const [secondRowCurrentPosition, setSecondRowCurrentPosition] = useState(0);

    //Ref
    const firstRowFlatListRef = useRef();
    const secondRowFlatListRef = useRef();

    useEffect(()=>{
        let positionTimer;

        const timer = ()=>{
            positionTimer = setTimeout(()=>{
                // Incrment scroll position with each new interval

                //Slider 1
                setFirstRowCurrentPosition(prevPosition => {
                     const position = Number(prevPosition) + 1;
                     firstRowFlatListRef?.current?.scrollToOffset({
                         offset : position,
                         animated : false
                     })

                     const maxOffset = constants.walkthrough_01_01_images.length * ITEM_WIDTH;

                     if(prevPosition > maxOffset){
                         const offset = prevPosition - maxOffset;

                         firstRowFlatListRef?.current?.scrollToOffset({
                             offset,
                             animated : false
                         })

                         return offset
                     }else{
                         return position
                     }
                })

                //Slider 2

                setSecondRowCurrentPosition(prevPosition => {
                    const position = Number(prevPosition) + 1;
                    secondRowFlatListRef?.current?.scrollToOffset({
                        offset : position,
                        animated : false
                    })

                    const maxOffset = constants.walkthrough_01_02_images.length * ITEM_WIDTH;

                    if(prevPosition > maxOffset){
                        const offset = prevPosition - maxOffset;

                        secondRowFlatListRef?.current?.scrollToOffset({
                            offset,
                            animated : false
                        })

                        return offset
                    }else{
                        return position
                    }
               })

                timer();
            }, 32)
        }
        timer();

        return ()=>{
            clearTimeout(positionTimer)
        }
    }, []);


    return (
        <View>
            {/* Slider 1 */}
            <FlatList 
                ref={firstRowFlatListRef}
                decelerationRate="fast"
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider1"
                keyExtractor={(_,index)=> `Slider_${index}`}
                data={firstRowImages}
                scrollEnabled={false}
                renderItem={({ item, index})=>{
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems:'center',
                                justifyContent : 'center'
                            }}
                        >
                            <Image 
                                source={item}
                                style={{
                                    width : 110,
                                    height : 110
                                }}
                            />
                        </View>
                    )
                }}

            />
            {/* Slider 2 */}
            <FlatList 
                ref={secondRowFlatListRef}
                decelerationRate="fast"
                style={{
                    marginTop: SIZES.padding,
                    transform :[{rotate : "180deg"}]
                }}
                horizontal
                showsHorizontalScrollIndicator={false}
                listKey="Slider2"
                keyExtractor={(_,index)=> `Slider2_${index}`}
                data={secondRowImages}
                scrollEnabled={false}
                renderItem={({ item, index})=>{
                    return (
                        <View
                            style={{
                                width: ITEM_WIDTH,
                                alignItems:'center',
                                justifyContent : 'center',                               
                                transform :[{rotate : "180deg"}]
                            }}
                        >
                            <Image 
                                source={item}
                                style={{
                                    width : 110,
                                    height : 110
                                }}
                            />
                        </View>
                    )
                }}

            />
        </View>
    )
}

export default FirstWalkThroughScreen;