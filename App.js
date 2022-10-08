import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import AccountScreen from './src/screeens/AccountScreen';
import SigninScreen from './src/screeens/SigninScreen';
import SignupScreen from './src/screeens/SignupScreen';
import TrackCreateScreen from './src/screeens/TrackCreateScreen';
import TrackDetailScreen from './src/screeens/TrackDetailScreen';
import TrackListScreen from './src/screeens/TrackListScreen';
import ResolveAuthScreen from './src/screeens/ResolveAuthScreen';

import { Provider as AuthProvider } from './src/context/AuthContext';

import { setNavigator } from './src/navigation/NavigationRef';

const switchNavigator = createSwitchNavigator({
   ResolveAuth : ResolveAuthScreen,
   loginFlow : createStackNavigator({
      Signup : SignupScreen,
      Signin : SigninScreen
   }),
   
   mainFlow : createBottomTabNavigator({
     trackListFlow: createStackNavigator({
       TrackList : TrackListScreen,
       TrackDetail : TrackDetailScreen
     }),
     TrackCreate : TrackCreateScreen,
     Account: AccountScreen
   })

});

const App = createAppContainer(switchNavigator);

export default ()=>{
  return <AuthProvider>
    <App ref={(navigator)=> { setNavigator(navigator) }}/>
  </AuthProvider>
}