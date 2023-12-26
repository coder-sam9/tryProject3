import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import CartCard from '../components/CartCard'
import { useSelector } from 'react-redux';

export default function CartItemsDisplay({navigation}) {
    let cartItems=[];
    cartItems=useSelector((state)=>state.reducer);
    console.warn(cartItems);

  return (
    <View>
      <Button title='go to add items' onPress={()=>navigation.navigate("CartItemsAdd")}/>
      <Button title='check cart scren' onPress={()=>{navigation.navigate("CheckCart")}}/>
      <Text style={{color:"black"}}>CartItemsDisplay</Text> 
      {cartItems.length===0?<Text style={{color:"#000"}}>Add Items</Text>:
      
      <FlatList data={cartItems} keyExtractor={(cartItems)=>cartItems.id} renderItem={({item})=>(

        <CartCard item={item}/>
        )}/>
      }
    </View>
  )
}