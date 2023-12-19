import React, { useState } from "react";
import { Image, TextInput, View, Text } from "react-native";

export default function ModTextInput({keyboardType,placeholder,onChangeText,secureTextEntry,title}) {
    return(
        <View style={{backgroundColor:"#FFF", alignSelf:"center",width:"100%",marginTop:0,marginBottom:5}}>
            <Text style={{color:"#000",fontSize:15,fontFamily:"open-Sans",fontWeight:"400",marginTop:5,marginBottom:5}}>
                {`${title}`}
            </Text>
            <View style={{width:"100%",borderWidth:1,borderColor:"#0C46C4", height:55,justifyContent:"center"}}>
            <TextInput placeholder={placeholder} placeholderTextColor={"#5B58AD"} keyboardType={keyboardType} onChangeText={onChangeText} secureTextEntry={secureTextEntry} style={{color:"#000",fontSize:16,fontWeight:"400",}}/>
            </View> 

        </View>
    )
}