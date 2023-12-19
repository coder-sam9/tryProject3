import React from "react";
import { Dimensions, SafeAreaView, StatusBar ,Text, View,StyleSheet,Image, TouchableOpacity} from "react-native";

const screenWidth= Dimensions.get("screen").width;
const screenHeight= Dimensions.get("screen").height;
export default function OptionsScreen({navigation}) {
    // console.log("screen height is="+screenHeight);
    return(
        <SafeAreaView style={{backgroundColor:"#FFF",alignItems:"center",justifyContent:"center",flex:1}}>
            <StatusBar/>
            {/* Top Notch and Image Design */}
            {/* <View style={{height:screenHeight*0.3}}> */}
            <View style={styles.topNotch}></View>
        <View style={styles.centerImage}>
    <Image source={require('../assets/logo.png')} style={{overflow:"hidden",width:100,height:125}}/>
        </View>
            {/* </View> */}


        <View style={{alignItems:"center",justifyContent:"center"}}>

        <Text style={{fontSize:15,fontWeight:"600",color:"#0C46C4",marginTop:80}}>
            Choose your option
        </Text>
        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-evenly",marginBottom:20,marginTop:20}}>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("addNew")}} style={{backgroundColor:"#0C46C4",width:100,height:100,justifyContent:"center",alignItems:"center",borderRadius:12}}>
            <Image source={require("../assets/Person.png")} style={{width:60,height:60}}/>
            </TouchableOpacity>
            <Text style={{fontSize:15,fontWeight:"400",color:"#000",}}>
                Admin
            </Text>
        </View>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("addNew")}} style={{backgroundColor:"#0C46C4",width:100,height:100,justifyContent:"center",alignItems:"center",borderRadius:12}}>
            <Image source={require("../assets/Tutor.png")} style={{width:60,height:60}}/>
            </TouchableOpacity>
            <Text style={{fontSize:15,fontWeight:"400",color:"#000",}}>
                Teacher
            </Text>
        </View>
        </View>
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={()=>{navigation.navigate("addNew")}} style={{backgroundColor:"#0C46C4",width:100,height:100,justifyContent:"center",alignItems:"center",borderRadius:12}}>
            <Image source={require("../assets/Student.png")} style={{width:60,height:60}}/>
            </TouchableOpacity>
            <Text style={{fontSize:15,fontWeight:"400",color:"#000",}}>
                Student or Guest
            </Text>
        </View>
        
        </View>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{flexDirection:"column",flex:1,paddingLeft:10,paddingRight:10,backgroundColor:"#FFF",justifyContent:"center"},
    // Top Notch Styling
    topNotch:{
        backgroundColor:"#28C2A0",
        
        width:440, 
        height:screenHeight*0.57, 
        borderRadius:screenHeight*0.57,
        alignSelf:"center",
        position:"absolute",
        top:-screenHeight*0.38,
        flexDirection:"column",flex:1
    },
    // Center Image Styling
    centerImage:{backgroundColor:"#FFF",
    width:screenHeight*0.22,
    height:screenHeight*0.22,
    borderWidth:5,
    borderRadius:screenHeight*0.16,
    borderColor:"#28C2A0",
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    // alignContent:"center",
    position:"absolute",
    top:screenHeight*0.06,
},
})
{/* <View style={{justifyContent:"space-around",flexDirection:"row",width:"100%",marginBottom:20}}>
    <View style={{padding :20,backgroundColor:"#0C46C4", borderRadius:12}}>
    <Image source={require('../assets/Student.png')} style={{overflow:"hidden",width:80,height:80}}/>
    <Text>
        Student or Guest
    </Text>

</View>

<View style={{padding :20,backgroundColor:"#0C46C4", borderRadius:12}}>
    <Image source={require('../assets/Tuition.png')} style={{overflow:"hidden",width:80,height:80}}/>
        <Text>
            Tutor
        </Text>
</View>
</View>
<View style={{padding :20,backgroundColor:"#0C46C4", borderRadius:12}}>
    <Image source={require('../assets/Person.png')} style={{overflow:"hidden",width:80,height:80}}/>
    <Text>
        Admin
    </Text>
</View>  */}