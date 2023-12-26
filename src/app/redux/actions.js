import { Add_to_Cart, Clear_Cart, Remove_from_Cart } from "./constants";

export function AddToCart(item) {
    
    return{
        type:Add_to_Cart,
        data:item
    }
    
}

export function RemoveFromCart(item){
    return{
        type:Remove_from_Cart,
        data:item
    }
}

