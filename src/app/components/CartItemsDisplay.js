import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function CartItemsDisplay() {
    const cartItems = useSelector((state) => state.reducer);
    
    useEffect(() => {
        // You can dispatch actions or perform other side effects here
        // Make sure not to dispatch actions that will lead to infinite loops
        // Example: dispatch(addToCart({ item: someItem }));
    }, []); // Empty dependency array ensures this effect runs only once
    console.log(cartItems);
    const count = cartItems.length;

    return (
        <View>
            {cartItems.length===0?<Text>cart is null add something</Text>:
            
            <Text>{`Items in the cart ${count}`}</Text>
            }

        </View>
    );
}
