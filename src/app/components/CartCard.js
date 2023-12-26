import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AddToCart, RemoveFromCart } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function CartCard({ item }) {
    const [added,setAdded]=useState(false);
    const dispatch = useDispatch();
    
    const checkCart=()=>{
    const  cartItemsResponse = useSelector((state) => state.reducer);
      setCartItems(cartItemsResponse);
    console.log("cart Items are"+cartItems);
    // 
    }
    const handleClicked=()=>{
        if(added){
            dispatch(RemoveFromCart(item))
            setAdded(false);
        }
        else {
            dispatch(AddToCart(item));
            setAdded(true);
        }
    }
    const handle_AddToCart = () => {
        
        // You don't need to pass `item` as a parameter here,
        // because you are using the `item` from the component props.
    }
        
    
 
    

    return (
       
        <TouchableOpacity onPress={()=>handleClicked()}
            style={{ margin: 10, backgroundColor: "#c0c0c0", borderRadius: 20, paddingLeft: 20, paddingBottom: 10 }}
        >
            <Text>
                {`${item.title}`}
            </Text>
            <Image
                source={{ uri: item.images[0] }}
                style={{ width: 150, height: 150, borderWidth: 1, borderColor: "red", marginTop: 5 }}
            />
            <Text>
                {`price: ${item.price}`}
            </Text>
            {added?<Text style={{backgroundColor:"blue",padding:10,borderRadius:5,color:"#FFF"}} >Click to Remove</Text>:<></>}
        </TouchableOpacity>
    );
}
