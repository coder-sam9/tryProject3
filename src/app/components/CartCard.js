import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AddToCart } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function CartCard({ item }) {
    const dispatch = useDispatch();

    const handle_AddToCart = () => {
        // You don't need to pass `item` as a parameter here,
        // because you are using the `item` from the component props.
        dispatch(AddToCart(item));
    }

    return (
        <TouchableOpacity
            style={{ margin: 10, backgroundColor: "#c0c0c0", borderRadius: 20, paddingLeft: 20, paddingBottom: 10 }}
            onPress={handle_AddToCart}  // Removed the `item` parameter here
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
        </TouchableOpacity>
    );
}
