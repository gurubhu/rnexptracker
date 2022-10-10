import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    View,
    Image,
    Modal,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import TextButton from '../../components/TextButton';
import FormInput from '../../components/FormInput';
import IconButton from '../../components/IconButton';
import CountryDropDown from '../../components/CountryDropDown';
import CheckBox from '../../components/CheckBox';

import FONTS from '../../constants/FONTS';
import COLORS from '../../constants/COLORS';
import constants from '../../constants/constants';
import SIZES from '../../constants/SIZES';
import images from '../../constants/images';
import icons from '../../constants/icons';


const AuthMain = ()=>{

    const [mode, setMode] = React.useState("signIn")
    const [email, setEmail] = React.useState("")
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [selectedCountry, setSelectedCountry] = React.useState(null)
    const [password, setPassword] = React.useState("")
    const [isVisible, setIsVisible] = React.useState(false)

    const [countries, setCountries] = React.useState([])
    const [showCountryModal, setShowCountryModal] = React.useState(false)
    const [termsChecked, setTermsChecked]= React.useState(false)


    React.useEffect(()=>{
        //fetch countries

        fetch("https://restcountries.com/v2/all")
            .then(response => response.json())
            .then(data =>{
                let countryData = data.map(item =>{
                    return {
                        code : item.alpha2Code,
                        name : item.name,
                        callingCode : `+${item.callingCodes[0]}`,
                        flag : `https://countryflagsapi.com/png/${item.alpha2Code}`
                    }
                })
                //console.log(countryData[0]);
                setCountries(countryData)
            })
    });
    

    function renderSignIn(){
        return(
            <View style={{
                marginTop : SIZES.padding,
                height : SIZES.height * 0.55,
                
            }}>
                
                <View style={{...styles.authContainer,...styles.shadow}}>
                    <Text style={{
                        width : '60%',
                        lineHeight : 45,
                        color : COLORS.dark,
                        ...FONTS.h1
                    }}>
                        Sign in to contine
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps={"handled"}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow : 1,
                            justifyContent : 'center'
                        }}
                    >
                        {/* Email */}
                        <FormInput 
                            containerStyle={{
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Email"
                            value={email}
                            onChange={(text)=> setEmail(text)}
                            prependComponent={
                                <Image 
                                    source={icons.email}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight : SIZES.base
                                    }}
                                />
                            }
                        />
                        {/* Password */}
                        <FormInput 
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Password"
                            value={password}
                            secureTextEntry={!isVisible}
                            onChange={(text)=> setPassword(text)}
                            prependComponent={
                                <Image 
                                    source={icons.lock}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight : SIZES.base
                                    }}
                                />
                            }
                            appendComponent={
                                <IconButton 
                                    icon={ isVisible ? icons.eye_off : icons.eye}
                                    iconStyle={{
                                        tintColor : COLORS.grey
                                    }}
                                    onPress={()=>setIsVisible(!isVisible)}
                                />
                            }
                        />
                        <View 
                            style={{
                                alignItems: 'flex-end'
                            }}>
                                <TextButton 
                                    label="Forgot Password?"
                                    contentContainerStyle={{
                                        marginTop: SIZES.radius,
                                        backgroundColor : null
                                    }}
                                    labelStyle={{
                                        color : COLORS.support3,
                                        ...FONTS.h4
                                    }}
                                />
                        </View>
                    </KeyboardAwareScrollView>
                    <TextButton 
                        label="Log In"
                        contentContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}

                        onPress={()=> console.log("Log in")}
                    />
                </View>
                
            </View>
        )
    }

    function renderSignUp(){
        return(
            <View style={{
                marginTop : SIZES.padding,
                height : SIZES.height * 0.80
            }}>
                
                <View style={{...styles.authContainer,...styles.shadow}}>
                    <Text style={{
                        color : COLORS.dark,
                        ...FONTS.h1
                    }}>
                        Create New Account
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode="on-drag"
                        keyboardShouldPersistTaps={"handled"}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow : 1,
                            marginTop:SIZES.padding,
                            paddingBottom : SIZES.padding * 2
                        }}
                    >
                        {/* Name */}
                        <FormInput 
                            containerStyle={{
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Name"
                            value={name}
                            onChange={(text)=> setName(text)}
                            prependComponent={
                                <Image 
                                    source={icons.person}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight: SIZES.base
                                    }}
                                />
                            }
                        />
                        {/* Email */}
                        <FormInput 
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Email"
                            value={email}
                            onChange={(text)=> setEmail(text)}
                            prependComponent={
                                <Image 
                                    source={icons.email}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight: SIZES.base
                                    }}
                                />
                            }
                        />
                        {/* Phone */}
                        <FormInput 
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Phone"
                            value={phone}
                            onChange={(text)=> setPhone(text)}
                            prependComponent={
                                <Image 
                                    source={icons.phone}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight: SIZES.base
                                    }}
                                />
                            }
                        />
                        {/* Country */}
                        <CountryDropDown 
                            containerStyle={{
                                marginTop : SIZES.radius
                            }}
                            selectedCountry={selectedCountry}
                            onPress={()=> {
                                setShowCountryModal(!showCountryModal)                           
                            }}
                        />
                        {/* Password */}
                        <FormInput 
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius : SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeholder="Password"
                            value={password}
                            secureTextEntry={!isVisible}
                            onChange={(text)=> setPassword(text)}
                            prependComponent={
                                <Image 
                                    source={icons.lock}
                                    style={{
                                        width : 25,
                                        height : 25,
                                        marginRight : SIZES.base
                                    }}
                                />
                            }
                            appendComponent={
                                <IconButton 
                                    icon={ isVisible ? icons.eye_off : icons.eye}
                                    iconStyle={{
                                        tintColor : COLORS.grey
                                    }}
                                    onPress={()=>setIsVisible(!isVisible)}
                                />
                            }
                        />
                        {/* Terms And Conditions */}
                        <CheckBox 
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            isSelected={termsChecked}
                            onPress={()=> setTermsChecked(!termsChecked)}
                        />
                    </KeyboardAwareScrollView>
                    <TextButton 
                        label="Create Account"
                        contentContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        labelStyle={{
                            ...FONTS.h3
                        }}

                        onPress={()=> console.log("Create Account")}
                    />
                </View>
                
            </View>
        )
    }

    function renderAuthContainer(){
        if(mode === 'signIn'){
            return renderSignIn()
        }else{
            return renderSignUp()
        }
    }

    function renderCountryModal() {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={showCountryModal}
            >
                <TouchableWithoutFeedback
                    onPress={() => setShowCountryModal(false)}
                >
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: COLORS.dark80
                        }}
                    >
                        <View
                            style={{
                                height: 400,
                                width: SIZES.width * 0.8,
                                backgroundColor: COLORS.light,
                                borderRadius: SIZES.radius
                            }}
                        >
                            <FlatList
                                data={countries}
                                keyExtractor={(item) => item.code}
                                contentContainerStyle={{
                                    paddingHorizontal: SIZES.padding,
                                    paddingBottom: SIZES.padding,
                                }}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            style={{
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                marginTop: SIZES.radius
                                            }}
                                            onPress={() => {
                                                console.log(item)
                                                setSelectedCountry(item)
                                                setShowCountryModal(false)
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.flag }}
                                                resizeMode="contain"
                                                style={{
                                                    width: 40,
                                                    height: 30
                                                }}
                                            />
                                            <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
  
    function renderAuthContainerFooter(){
        return (
             <View
                style={{
                    flexDirection : 'row',
                    height : 80,
                    alignItems: 'flex-end',
                    justifyContent : 'center',
                    marginTop : -30,
                    marginHorizontal: SIZES.radius,
                    paddingBottom : SIZES.radius,
                    borderBottomLeftRadius : SIZES.radius,
                    borderBottomRightRadius : SIZES.radius,
                    backgroundColor: COLORS.light60,
                    zIndex: 0
                }}
             >
                 <Text
                    style={{
                        color : COLORS.grey,
                        ...FONTS.body5
                    }}
                 >
                     { mode === 'signIn' ? "Don't have an account?" : "I already have an account."}
                 </Text>
                 <TextButton 
                    label={mode === 'signIn' ? "Create New Account": "Sign In"}
                    contentContainerStyle={{
                        marginLeft : SIZES.base,
                        backgroundColor : null
                    }}
                    labelStyle={{
                        color : COLORS.support3,
                        ...FONTS.h5
                    }}
                    onPress={()=>{
                        if(mode === 'signIn'){
                            setMode('signUp');
                        }else{
                            setMode('signIn')
                        }
                    }}
                 />
             </View>
        )
    }

    function renderSocialLogin(){
        return(
            <View
                style={{
                    flex : 1,
                    alignItems : 'center',
                    justifyContent: 'center',
                    marginTop: -30,
                    zIndex : -1
                }}
            >
                <Text 
                    style={{
                        color : COLORS.dark,
                        ...FONTS.body3
                    }}
                >
                    OR login with
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: SIZES.radius
                    }}
                >
                    <IconButton 
                        icon={icons.twitter}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        containerStyle={styles.socialButtonContainer}
                    />
                    <IconButton 
                        icon={icons.google}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        containerStyle={{
                            ...styles.socialButtonContainer,
                            marginLeft: SIZES.radius
                        }}
                    />
                    <IconButton 
                        icon={icons.linkedin}
                        iconStyle={{
                            tintColor : COLORS.dark
                        }}
                        containerStyle={{
                            ...styles.socialButtonContainer,
                            marginLeft: SIZES.radius
                        }}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Image 
                source={images.logo}
                style={styles.image}
            />
            {/* Auth Container */}
            <View style={{
                zIndex : 1
            }}>
                {renderAuthContainer()}
            </View>
            {/* <TextButton 
                label="Toggle"
                onPress={()=>{
                    if(mode === 'signIn'){
                        setMode('signUp');
                    }else{
                        setMode('signIn')
                    }
                }}
            /> */}

            {/* Auth Container Footer */}
            {renderAuthContainerFooter()}

            {/* Social Login */}

            { mode === 'signIn' && renderSocialLogin()}

            {/* Country Modal */}
            {renderCountryModal()}
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex : 1,
        paddingHorizontal : SIZES.padding,
        backgroundColor : COLORS.lightGrey
    },
    image :{
        alignSelf :'center',
        marginTop : SIZES.padding * 2,
        width : 50,
        height : 50
    },
    authContainer :{
        flex : 1,
        width : SIZES.width - (SIZES.padding * 2),
        padding : SIZES.padding,
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.light,
        zIndex : 1
    },
    
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    socialButtonContainer :{
        width: 55,
        height :55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius : SIZES.radius,
        backgroundColor : COLORS.grey20
    }
});

export default AuthMain;