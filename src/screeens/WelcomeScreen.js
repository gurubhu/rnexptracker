import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import TextButton from '../components/TextButton';

import COLORS from '../constants/COLORS';
import images from '../constants/images';
import SIZES from '../constants/SIZES';
import FONTS from '../constants/FONTS';


const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo And Title */}
            <View style={styles.imageContainer}>
                <Image 
                    source = {images.logo}
                    style={styles.image}
                />
                <Text style={styles.welcomeText}>
                    Welcome to
                </Text>
                <Text style={styles.margaretText}>
                    Margaret
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
                        onPress={() => navigation.navigate("Walkthrough")}
                    />
                <TextButton
                    contentContainerStyle={{
                        height: 50,
                        marginTop: SIZES.base,
                        backgroundColor: null
                    }}
                    label="Already have an account"
                    labelStyle={{
                        color: COLORS.primary
                    }}
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
    image :{
        width : 150,
        height : 150
    },
    welcomeText:{ 
        marginTop: SIZES.padding, 
        ...FONTS.h1 
    },
    margaretText: {
        marginTop : SIZES.base,
        ...FONTS.h1
    },
    footerContainer:{
        paddingHorizontal: SIZES.padding,
        marginBottom: 30
    }
})

export default WelcomeScreen;