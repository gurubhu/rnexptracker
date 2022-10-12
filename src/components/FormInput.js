import React from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';


const FormInput = ({
    containerStyle,
    inputContainerStyle,
    placeholder,
    inputStyle,
    value='',
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType="default",
    autoCompleteType="off",
    autoCapitalize="none",
    maxLength,
    placeHolderTextColor = COLORS.grey60

})=>{
    return (
        
        <View 
            style={{...containerStyle}}>
            <View style={{...styles.container,...inputContainerStyle}}>
                {prependComponent}
                <TextInput 
                    style={{...styles.textinput,...inputStyle}}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeHolderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoCompleteType} //verify
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChangeText={(text)=> onChange(text)}
                    onPressIn={onPress}
                    editable={editable}
                />
                { appendComponent }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flexDirection: "row",
        height : 55,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        alignItems: 'center',
        backgroundColor : COLORS.lightGrey
    },
    textinput:{
        flex : 1,
        paddingVertical : 0,
        ...FONTS.body3
    }
});

export default FormInput;