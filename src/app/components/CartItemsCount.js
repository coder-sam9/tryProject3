import { View, Text, TouchableOpacity, Button } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';

export default function CartItemsCount({navigation}) {
    let cartItems=[1,2];
    cartItems = useSelector((state) => state.reducer);
    console.log("cart Items are"+cartItems);
    useEffect(() => {
        // You can dispatch actions or perform other side effects here
        // Make sure not to dispatch actions that will lead to infinite loops
        // Example: dispatch(addToCart({ item: someItem }));
    }, []); // Empty dependency array ensures this effect runs only once
    console.log(cartItems);
    const count = cartItems.length;

    return (
        <View>
        <TouchableOpacity>
            {cartItems.length===0?<Text style={{backgroundColor:"yellow",color:"red"}}>cart is null add something</Text>:
            
            <Text style={{backgroundColor:"yellow",color:"red"}} >{`Items in the cart ${count}`}</Text>
        }

        </TouchableOpacity>
        </View>
    );
}
