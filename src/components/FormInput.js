import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TextInput,
    View
} from 'react-native';

import FONTS from '../constants/FONTS';
import COLORS from '../constants/COLORS';
import constants from '../constants/constants';
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
            style={{...containerStyle}}
        >
            <View
                style={{
                    flexDirection: "row",
                    height : 55,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    backgroundColor : COLORS.lightGrey,
                    ...inputContainerStyle
                }}
            >
                {prependComponent}
                <TextInput 
                    style={{
                        flex : 1,
                        paddingVertical : 0,
                        ...FONTS.body3,
                        ...inputStyle
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeHolderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoComplete={autoCompleteType} //verify
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLength}
                    onChange={(text)=> onChange(text)}
                    onPressIn={onPress}
                    editable={editable}
                />
                { appendComponent }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default FormInput;