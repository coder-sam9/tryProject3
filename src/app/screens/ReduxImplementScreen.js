import { View, Text, SafeAreaView, Image ,TouchableOpacity, FlatList, Dimensions, ActivityIndicator} from 'react-native'
import React from 'react';

import axios from 'axios';
import {  } from 'react-native-gesture-handler';
import { useState } from 'react';
import { useEffect } from 'react';
import CartCard from '../components/CartCard';
import CartItemsDisplay from '../components/CartItemsDisplay';
import { Button } from 'react-native';


export default function ReduxImplementScreen() {
    let screenHeight=Dimensions.get("screen").height;
    const [cartItems,setCartItems]=useState();
    const [apiData,setApiData]=useState();
    const [loading,setLoading]=useState(true);
    const APICall=async()=>{
      try {
         const response=await axios.get("https://dummyjson.com/products");
        setLoading(false);
        console.log("\n\n");

        console.log(response.data.products);
        setApiData(response.data.products);
      } catch (error) {
        setLoading(false);
        console.error(error);
      }

    }
    useEffect(()=>{
        APICall();
    },[])
  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1,alignItems:"center",}}>
      <Text style={{textAlign:"right"}}>ReduxImplementScreen</Text>
      <Text>
     <CartItemsDisplay />

      </Text>
      <Button title='Refetch' onPress={()=>APICall()}/>
      {loading?
      
      <ActivityIndicator size="large" color="#00ff00" />
      :<></>}
      <FlatList data={apiData} keyExtractor={(apiData)=>apiData.id} renderItem={({item})=>(

      <CartCard item={item}/>
      )}/>
      
    </SafeAreaView>
  )
}
