import React,{useEffect, useState} from "react";

import { Alert, SafeAreaView, StatusBar, Text, Touchable, TouchableOpacity,PermissionsAndroid,StyleSheet, Button } from "react-native";
import Geolocation from 'react-native-geolocation-service';
// import VIForegroundService from "@voximplant/react-native-foreground-service";
import BackgroundService from 'react-native-background-actions';
import { useSafeAreaFrame } from "react-native-safe-area-context";
const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));
export default function LocationFetch({navigation}) {
  const poss=[];
  let j=0;
  const [positions,setPositions]=useState();
  const veryIntensiveTask = async (taskDataArguments) => {
    // Example of an infinite loop task
    const { delay } = taskDataArguments;
    await new Promise( async (resolve) => {
      
      for (let i = 0; BackgroundService.isRunning(); i++) {
        j=i;
        console.log(i);
        await BackgroundService.updateNotification({taskDesc: "My counter is "+i});
        // console.log(positions);
        showLoc();
        await sleep(delay);
      }
    });
    
  };
  const options = {
    taskName: 'Example',
    taskTitle: 'Notification Title', 
    taskDesc: `Background task is running ${positions}`,
    taskIcon: {
        name: 'ic_launcher',
        type: 'mipmap',
    },
    color: '#ff00ff',
    linkingURI: 'yourSchemeHere://chat/jane', // See Deep Linking for more info
    parameters: {
        delay: 2000,
    },
  }
  const StartBackgroundService=async ()=>{

    await BackgroundService.start(veryIntensiveTask, options);
    await BackgroundService.updateNotification({taskDesc: `My counter is `});
  }
  const StopBackgroundService = async ()=>{
    await BackgroundService.stop();
    console.log(poss);
  }
  useEffect(()=> {
    getLocationPermission();
    // NotificationChannel();
  },[]);
  // const NotificationChannel=()=>{
  //   const channelConfig = {
  //     id: 'channelId',
  //     name: 'Channel name',
  //     description: 'Channel description',
  //     enableVibration: false
  // };
  // VIForegroundService.createNotificationChannel(channelConfig);
  // }
  // Taking location fetch permisssion
  const getLocationPermission=async ()=>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === 'granted') {
        console.log('You can use the Location');
        
      } else {
        console.log('Location permission denied');
      }
      granted==='granted'?console.log("Location Permisssion granted"):console.log("location permission "+granted);
    } catch (err) {
      console.warn(err);
    }
  }
  const backgroundPermission=async()=>{
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION
      );
      if (granted === 'granted') {
        console.log('You can use the Location');
        
      } else {
        console.log('Location permission denied');
      }
      granted==='granted'?console.log("Location Permisssion granted"):console.log("location permission "+granted);
    } catch (err) {
      console.warn(err);
    } 
  }
  // getLocationPermission();
  const showLoc=async ()=>{
    console.warn("showLoc called");
      Geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            setPositions(position);
            poss.push(
              positions
            )
            // Alert.alert("Location is",`${position.coords.longitude} long is this ${position.coords.latitude}`)
            // navigation.navigate("Landing");
          },
          (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    
  }
  return(
    
    <SafeAreaView style={{justifyContent:"space-around",alignItems:"center",flex:1}}>
      <StatusBar/>
      <TouchableOpacity style={styles.btn} onPress={()=>showLoc()}>
  <Text>
   just fetch and see location
  </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>StartBackgroundService()}>
  <Text>
   fetch location in background and see location on console
  </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>StopBackgroundService()}>
  <Text>
    stop fetching location in background
  </Text>
      </TouchableOpacity>
      <Button title="Bagm loc" onPress={()=> backgroundPermission()}/>
      {/* <TouchableOpacity style={styles.btn} onPress={()=>showLoc()}>
  <Text>
    see location
  </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  )

  }
  const styles = StyleSheet.create({
    btn:{
    backgroundColor:"#c0c0c0",
    borderWidth:1,padding:10,
    borderColor:"black",
    width:"60%",
    height:100,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30
  }

  })