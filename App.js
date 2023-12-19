import React,{useEffect, useState} from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpScreen from "./src/app/screens/SignUpScreen";
import LandingScreen from "./src/app/screens/LandingScreen";
import OptionsScreen from "./src/app/screens/OptionsScreen";
import HomeScreen from "./src/app/screens/HomeScreen";
import TopNotchDesign from "./src/app/components/TopNotchDesign";
import AddNewStudent from "./src/app/screens/AddNewStudent";
import ModTextInput from "./src/app/components/ModTextInput";
import AppointmentSlot from "./src/app/components/AppointmentSlot";
import SlotBookingScreen from "./src/app/screens/SlotBookingScreen";
import Logo from "./src/app/components/LogoCheck";
import { Text, View,TextInput,SafeAreaView ,StatusBar, Alert} from "react-native";
import NotificationScreen from "./src/app/screens/NotificationScreen";
import DetailsScreen from "./src/app/screens/DetailsScreen";
import LocationFetch from "./src/app/screens/LocationFetch";
import firebase from '@react-native-firebase/app';

import messaging from '@react-native-firebase/messaging';
import MapScreen from "./src/app/screens/MapScreen";
import CustomNotification from "./src/app/components/CustomNotification";




const Stack = createStackNavigator();




export default function App(params) {
 
  return(
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Landing" component={LandingScreen}/>
    //     <Stack.Screen name="Options" component={OptionsScreen}/>
    //     <Stack.Screen name="addNew"  component={TopNotchDesign}/>
    //     <Stack.Screen name="SlotBooking" component={SlotBookingScreen}/>
    //     <Stack.Screen name="Location" component={LocationFetch}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <LocationFetch/>
    // <MapScreen/>
    <CustomNotification/>
    // <NotificationScreen/>
  )
}