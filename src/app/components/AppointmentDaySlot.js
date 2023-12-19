import React, { useState } from "react";
import { View ,TouchableOpacity, Text, StyleSheet} from "react-native";

export default function AppointmentDaySlot({day,daate,borderColor,txtClr}) {
   const [backColor,setBackColor]=useState("white");
   const [txtClr,setTextColor] = useState("black");
    return(
        // <View style={{justifyContent:"center",alignItems:"center",}}>
            <TouchableOpacity onPress={()=>{setBackColor("blue"),setTextColor("white")}} style={[styles.slot, {backgroundColor:backColor,borderColor:borderColor}]}>
                <Text>
                    {`${day}`}
                </Text>
                <Text style={{color:txtClr,fontWeight:"500",fontSize:15}}>
                    {`${daate}`}
                </Text>
            </TouchableOpacity>
        // </View>
    )
}
const styles= StyleSheet.create({
    slot:{width:130,height:55,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
    }
})