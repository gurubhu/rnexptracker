import React, { useState, useEffect } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import * as Font from 'expo-font';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AccountScreen from './src/screeens/AccountScreen';
import SigninScreen from './src/screeens/SigninScreen';
import SignupScreen from './src/screeens/SignupScreen';
import TrackCreateScreen from './src/screeens/TrackCreateScreen';
import TrackDetailScreen from './src/screeens/TrackDetailScreen';
import TrackListScreen from './src/screeens/TrackListScreen';
import ResolveAuthScreen from './src/screeens/ResolveAuthScreen';

import WelcomeScreen from './src/screeens/WelcomeScreen';
import WalkthroughScreen from './src/screeens/WalkthroughScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';

import { setNavigator } from './src/navigation/NavigationRef';

// const switchNavigator = createSwitchNavigator({
//    ResolveAuth : ResolveAuthScreen,
//    loginFlow : createStackNavigator({
//       Signup : SignupScreen,
//       Signin : SigninScreen
//    }),
   
//    mainFlow : createBottomTabNavigator({
//      trackListFlow: createStackNavigator({
//        TrackList : TrackListScreen,
//        TrackDetail : TrackDetailScreen
//      }),
//      TrackCreate : TrackCreateScreen,
//      Account: AccountScreen
//    })

// });

let customFonts = {
  'Poppins-Black': require('./src/assets/fonts/Poppins-Black.ttf'),
  'Poppins-BlackItalic': require('./src/assets/fonts/Poppins-BlackItalic.ttf'),
  'Poppins-BoldItalic': require('./src/assets/fonts/Poppins-BoldItalic.ttf'),
  'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
  'Poppins-ExtraBold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-ExtraBoldItalic': require('./src/assets/fonts/Poppins-ExtraBoldItalic.ttf'),
  'Poppins-ExtraLight': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-ExtraLightItalic': require('./src/assets/fonts/Poppins-ExtraLightItalic.ttf'),
  'Poppins-Italic': require('./src/assets/fonts/Poppins-Italic.ttf'),
  'Poppins-Light': require('./src/assets/fonts/Poppins-Light.ttf'),
  'Poppins-LightItalic': require('./src/assets/fonts/Poppins-LightItalic.ttf'),
  'Poppins-Medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  'Poppins-MediumItalic': require('./src/assets/fonts/Poppins-MediumItalic.ttf'),
  'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-SemiBoldItalic': require('./src/assets/fonts/Poppins-SemiBoldItalic.ttf'),
  'Poppins-Thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
  'Poppins-ThinItalic': require('./src/assets/fonts/Poppins-ThinItalic.ttf'),

}

const switchNavigator = createSwitchNavigator({
  Welcome : WelcomeScreen,
  Walkthrough: WalkthroughScreen,
  Signin : SigninScreen
})

const App = createAppContainer(switchNavigator);

 

export default ()=>{
  
  [fontsLoaded, setFontsLoaded] = useState(false);

  const _loadFontsAsync = async ()=>{
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }
  
  useEffect(()=>{
    _loadFontsAsync();
  }, []);

  if(!fontsLoaded){
    return null;
  }

  return <AuthProvider>
    <App ref={(navigator)=> { setNavigator(navigator) }}/>
  </AuthProvider>
}