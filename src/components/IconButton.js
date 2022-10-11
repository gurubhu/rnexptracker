import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

const IconButton = ({
    containerStyle,
    icon,
    iconStyle,
    onPress
})=>{
    return (
        <TouchableOpacity
            style={{...styles.container,...containerStyle}}
            onPress={onPress}
        >
            <Image 
                source={icon}
                style={{
                    ...styles.image,
                    ...iconStyle
                }}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container :{
        alignItems: 'center',
        justifyContent: 'center'
    },
    image :{
        width : 30,
        height : 30
    }
});

export default IconButton;