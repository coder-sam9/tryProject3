import { View, Text, SafeAreaView, StatusBar, TextInput, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import messaging from '@react-native-firebase/messaging';
const NotificationScreen = () => {
  // const [token,setToken]=useState();
  // let token='';
  // const getPermission=async()=>{
  // const permission=PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  // console.log(permission+"Permission for Notification");
  // }
  const getFBToken=async()=>{
    console.log("getFBCalled");
    const authStatus = await messaging().requestPermission();
    console.log("\n\n\nauthStatus executed with status"+authStatus+"\n\n\n");
  const enabled =    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;


  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
const token=await messaging().getToken();
console.log(token);

}
// useEffect(()=>{
//   getPermission();
// },[]);
useEffect(()=>{
  getFBToken();
},[]);
  return (
    <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <StatusBar/>
      <Text>NotificationScreen</Text>
      <TextInput placeholder='Enter text' style={{backgroundColor:"grey",width:"95%",paddingLeft:10}} placeholderTextColor={"white"}/>
    </SafeAreaView>
  )
}

export default NotificationScreen
// async function firebaseInit(){
  // const firebaseConfig = {
    // apiKey: "AIzaSyDmhkMfIbLtlDu24UM-oHtUNxm32N_cj5I",
    // appId: "1:413497460418:android:95c6f2f3b4ae6def3c1d5b",
    // projectId: "tryproject3-sami",
    // storageBucket: "tryproject3-sami.appspot.com",
    // messagingSenderId: "413497460418",
    // databaseURL:"https://tryproject3-sami.firebaseio.com"
  // };
  // const db=await firebase.initializeApp(firebaseConfig);
  // console.log(db);
// }
// useEffect(()=>{
  // firebaseInit()
// },[]);
// useEffect(() => {
//   const unsubscribe = messaging().onMessage(async remoteMessage => {
//     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
//   });

//   return unsubscribe;
// }, []);
// const getFBToken=async()=>{
//   console.log("getFBCalled");
//   const authStatus = await messaging().requestPermission();
//   console.log("\n\n\nauthStatus executed with status"+authStatus+"\n\n\n");
// const enabled =    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//   authStatus === messaging.AuthorizationStatus.PROVISIONAL;


// if (enabled) {
//   console.log('Authorization status:', authStatus);
// }
// const token=await messaging().getToken();
// console.log(token);

// }
// useEffect(()=>{
//   getPermission();
// },[]);
// useEffect(()=>{
// getFBToken();
// },[]);
// return (
//   <SafeAreaView style={{flex:1,justifyContent:"center",alignItems:"center"}}>
//     <StatusBar/>
//     <Text>NotificationScreen</Text>
//     <TextInput placeholder='Enter text' style={{backgroundColor:"grey",width:"95%",paddingLeft:10}} placeholderTextColor={"white"}/> 
//   </SafeAreaView>
// )