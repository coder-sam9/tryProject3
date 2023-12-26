import { View, Text,Button, SafeAreaView, Image ,TouchableOpacity, FlatList, Dimensions, ActivityIndicator, Alert} from 'react-native'
import React,{ useState ,useEffect} from 'react';

import axios from 'axios';

import CartCard from '../components/CartCard';
import CartItemsCount from '../components/CartItemsCount';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, Clearcart, RemoveFromCart } from '../redux/actions';


export default function ReduxImplementScreen({navigation}) {
    let screenHeight=Dimensions.get("screen").height;
    const [cartItems,setCartItems]=useState();
    const [apiData,setApiData]=useState();
    const [loading,setLoading]=useState(true);
    // const [added,setAdded]=useState(false);
    // const dispatch = useDispatch();
    // const checkCart=()=>{
    // const  cartItemsResponse = useSelector((state) => state.reducer);
    //   setCartItems(cartItemsResponse);
    // console.log("\n\ncart Items are"+cartItems);
    
    // }
    // const handleClicked=(item)=>{
    //     if(added){
    //         dispatch(RemoveFromCart(item))
    //         setAdded(false);
    //     }
    //     else {
    //         dispatch(AddToCart(item));
    //         setAdded(true);
    //     }
    // }
    const APICall=async()=>{
      try {
         const response=await axios.get("https://dummyjson.com/products");
        setLoading(false);
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
       
          
          <CartItemsCount/>
          {/* <Button title='Go to Cart' onPress={()=>navigation.navigate("CartItemsDisplay")}/> */}

          {loading?
          
          <ActivityIndicator size="large" color="#00ff00" />
          :<></>}
          {/* <Button title='check cart' onPress={()=>checkCart()}/> */}
            <FlatList data={apiData} keyExtractor={(apiData)=>apiData.id} renderItem={({item})=>(
          <CartCard item={item}/> 
        
          )}/> 
        </SafeAreaView>
      )
}
