import { Add_to_Cart, Clear_Cart, Remove_from_Cart } from "./constants";

const initialState=[];

export const reducer=(state=initialState,action)=>{
    console.log("\n reducer called \n");
    
        
        switch (action.type) {
            case Add_to_Cart:
                return[
                    ...state,
                    action.data
                ]
                
            case Remove_from_Cart: 
                
                    
                    state=state.filter((item)=>item.id!=action.data.id)
                
            return [...state]
            default: return state
                
        }
}