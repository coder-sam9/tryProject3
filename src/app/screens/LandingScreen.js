import React from "react";
import { ImageBackground, SafeAreaView, StatusBar,Text, TouchableOpacity } from "react-native";

export default function LandingScreen({navigation}) {
    return(
        <SafeAreaView>
            <StatusBar/>
            <ImageBackground source={require("../assets/MainBackground.png")} style={{width:"100%",height:"100%",justifyContent:"center", alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("Options")}}>

            <Text style={{color:"#0C46C4", fontFamily:"Roboto",fontWeight:"bold",fontSize:20,marginTop:50}}>
                ASDC and The Quran Academy
            </Text>
            </TouchableOpacity>
            {/* <Text>
            Sami Uddin
            </Text> */}
            
            </ImageBackground>
        </SafeAreaView>
    );
}