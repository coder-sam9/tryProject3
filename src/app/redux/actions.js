import { Add_to_Cart } from "./constants";

export function AddToCart(item) {
    console.log("\n action called\n");
    console.log("for item "+item.title);
    return{
        type:Add_to_Cart,
        data:item
    }
    
}