import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREENS from '../..';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SCREENS.SPLASH_SCREEN} />
      <Stack.Screen name="Login" component={SCREENS.LOGIN} />
      <Stack.Screen name="Otp_Screen" component={SCREENS.OTP_SCREEN} />
      <Stack.Screen name="Update_Profile" component={SCREENS.UPDATE_PROFILE} />
      <Stack.Screen name="Home_Screen" component={SCREENS.HOME_SCREEN} />
      <Stack.Screen name="Category_Page" component={SCREENS.CATEGORY_PAGE} />
      <Stack.Screen name="My_Account" component={SCREENS.MY_ACCOUNT} />
      <Stack.Screen
        name="SEE_ALL_COMPONENT"
        component={SCREENS.SEE_ALL_COMPONENT}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigation;
