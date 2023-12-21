import { Add_to_Cart } from "./constants";

const initialState=[];

export const reducer=(state=initialState,action)=>{
    console.log("\n reducer called \n");
    switch (action.type) {
        case Add_to_Cart:
            return[
                ...state,
                action.data
            ]
            
    
        default: return state
            
    }
}