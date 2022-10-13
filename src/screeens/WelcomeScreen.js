import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';

import TextButton from '../components/TextButton';

import COLORS from '../constants/COLORS';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';


const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo And Title */}
            <View style={styles.imageContainer}>
                <SimpleLineIcons name="wallet" size={150} color={COLORS.primary} />
                <Text style={styles.welcomeText}>
                    Welcome to
                </Text>
                <Text style={styles.outlayText}>
                    Squander
                </Text>
            </View>
            {/* Footer Buttons */}
            <View style={styles.footerContainer}>
                <TextButton
                        contentContainerStyle={{
                            height: 50,
                            borderRadius: SIZES.radius
                        }}
                        label="Get Started"
                        onPress={() => navigation.navigate("AuthMain")}
                    />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : COLORS.light
    },
    imageContainer :{
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    welcomeText:{ 
        marginTop: SIZES.padding, 
        ...FONTS.h1,
        color: COLORS.primary
    },
    outlayText: {
        marginTop : SIZES.base,
        ...FONTS.h1,
        color : COLORS.secondary
    },
    footerContainer:{
        paddingHorizontal: SIZES.padding,
        marginBottom: 30
    }
})

export default WelcomeScreen;