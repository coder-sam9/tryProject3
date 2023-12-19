import React, { useState } from "react";
import { StyleSheet, SafeAreaView,View,Dimensions ,ScrollView,TouchableOpacity,Image, Text, Button,Alert, ActivityIndicator} from "react-native";
import ModTextInput from "./ModTextInput";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import axios from "axios";
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {launchCamera,launchImageLibrary} from "react-native-image-picker";

const screenWidth= Dimensions.get("screen").width;
const screenHeight= Dimensions.get("screen").height;
export default function TopNotchDesign({navigation}) {

    const [loading,setLoading]=useState(false);
    const [TandC, setTandC] = useState(false)
    const [secText,setSecText]=useState(false);
    const [nam,setName]=useState();
    const[email,setEmail]=useState();
   const [password,setPassword]=useState();
   const [confPassword,setConfPassword]=useState();
   const [dob,setDob]=useState("Select a Date");
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [imageUri,SetImageUri]=useState();
   const CameraOpen = async()=>{
    console.log("camera open is called");
     const result= await launchCamera({mediaType:"photo",quality:1});
     const filePath= result.assets[0].uri;
     console.log(result);
     SetImageUri(filePath)
     console.log(imageUri);
   }
   const GalleryOpen = async ()=>{
     try {
       
       const result = await launchImageLibrary({mediaType:"photo",quality:1});
       console.log("results from gallery option\n"+result);
       const filePath= result.assets[0].uri;
       SetImageUri(filePath);
       console.log(imageUri);
     } catch (error) {
       console.error(error);
     }
   }
// Showing Date Call
   const showDatePicker = () => {
     setDatePickerVisibility(true);
   };
//  Date Cancel Call
   const hideDatePicker = () => {
     setDatePickerVisibility(false);
     setDob("Select a Date");
   };
//  Date Confirm Call
   const handleConfirm = (date) => {
     console.log("A date has been picked: ", date);
    
     hideDatePicker(); 
     setDob(date);
   };
//    Login Data Obj Creation
    const loginData={
        nam:nam,
        email:email,
        password:password,
        confPassword:confPassword,
        dob:dob,
    }; 
// Password not matched Alert
    const createAlert = () =>
   { Alert.alert('Password not Matched', 'Enter Same Password and Accept T&C', [
      {text: 'OK'},
    ])
setTandC(!TandC)
};
    // Succesfull completion Alert
    const thanks = () =>
    Alert.alert('Successful', 'Thank you for Adding  🥳', [
      {text: 'OK'},
    ]);
    const OnSubmit=()=>{
        {((loginData.password===loginData.confPassword) && loginData.password!=null && TandC==true)?signUpApi():createAlert();}
        navigation.navigate("SlotBooking");
    };
    // calling post dummy api and displaying response on console.log
    const signUpApi =async()=>{
        console.log(loginData);
        try {
            setLoading(true);
             const response = await axios.post("https://dummyjson.com/users/add",{
            loginData
        });
        console.log(response.data);
        setLoading(false);
        thanks();
        } catch (error) {
            setLoading(false);
            console.error(error);
        }

  
      }

      const imgOptions=()=>{
        Alert.alert("Upload Image", "Please select any one",[{
          text:"Gallery",onPress:()=>{GalleryOpen()}
        },
      {text:"Camera",onPress:()=>{CameraOpen()}}])
      }
    return(
        <SafeAreaView style={styles.container}>
            {/* Creating Top Notch with the Image Circle */}
        <View style={styles.topPortion}>
            <View style={styles.topNotch}></View>
<TouchableOpacity onPress={imgOptions} style={styles.centerImage}>
  {imageUri==null?(
<View>
{console.log("\n\nassets pic is called\n\n")}
    <Image source={require('../assets/Union.png')} style={{marginBottom:10,width:60,height:60,margin:25}}/>
        <Text style={styles.addPhoto}>
            Add Photo
        </Text>
</View> 
   ):<Image source={{uri:imageUri}} style={{ width:screenHeight*0.17,
    height:screenHeight*0.17,
    borderWidth:5,
    borderRadius:screenHeight*0.16,}}/>}
    </TouchableOpacity>
            </View>
        {/* Adding email, password Dob Fields */}
        <ScrollView style={styles.scrolview}>
        <ModTextInput  placeholder={"Enter Name"} onChangeText={(text)=>{setName(text)}} keyboardType={"alpha-numeric"} title={"User Name"}/>
        <ModTextInput  placeholder={"Enter email"} onChangeText={(text)=>{setEmail(text)}} keyboardType={"email-address"} title={"Email"}/>
        <ModTextInput  placeholder={"Enter Password"} onChangeText={(text)=>{setPassword(text)}} secureTextEntry={!secText} title={"Password"}/>
        {/* show password check box with text */}
        <BouncyCheckbox text=" Show Password" textStyle={{textDecorationLine:"none", fontSize:16,color:"#000"}} 
        isChecked={secText} size={16} fillColor="#0C46C4" 
        onPress={()=>setSecText(!secText)}/>
        <ModTextInput placeholder={"Confirm your password"} onChangeText={(text)=>{setConfPassword(text)}} title={"Confirm Password"}/> 
        {loading?<ActivityIndicator/>:<></>}
        <Text style={{color:"#000",marginTop:10}}> Date of Birth </Text>
        {/* Date Picker */}
        <TouchableOpacity onPress={showDatePicker} style={styles.dobip}>
          <Text style={{color:"#000"}}>
            {`${loginData.dob}`}
          </Text>
            </TouchableOpacity>   
            {/* Date Selection using default android calendar option */}
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/*Terms nd Cond. Check Box */}
        <BouncyCheckbox
        isChecked={TandC}
        onPress={() => setTandC(!TandC)}
        fillColor="#0C46C4" style={{marginTop:5}}
        text=" Terms and Condition accepted" textStyle={{textDecorationLine:"none", fontSize:16,color:"#000"}}
      />
      {/* Sign up button with onSubmit func call */}
    <TouchableOpacity style={styles.btn} onPress={()=>OnSubmit()}>
        <Text style={{color:"#FFF",fontSize:20,fontWeight:"400",}}>
           Sign Up
        </Text>
    </TouchableOpacity>
      </ScrollView>

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{flexDirection:"column",flex:1,
    paddingLeft:10,paddingRight:10,
    backgroundColor:"#FFF",justifyContent:"center"},
    topPortion:{
        // flex:1,
        height:screenHeight/3},
    scrolview:{
        // flex:2,
        height:2*screenHeight/3,
    },
    // Top Notch Styling
    topNotch:{
        backgroundColor:"#28C2A0",width:440, 
        height:screenHeight*0.57, 
        borderRadius:screenHeight*0.57,
        alignSelf:"center",
        position:"absolute",
        top:-screenHeight*0.38,
        flexDirection:"column",
},
// Center Image Styling
centerImage:{backgroundColor:"#FFF",
    width:screenHeight*0.17,
    height:screenHeight*0.17,
    borderWidth:5,
    borderRadius:screenHeight*0.16,
    borderColor:"#28C2A0",
    alignSelf:"center",
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    top:screenHeight*0.1,
    backgroundColor:"red"
},
// Add photo Text
addPhoto:{
    // marginBottom:10,
    marginLeft:20,
    fontSize:15,
    fontStyle:"normal",
    fontFamily:"Open-Sans",
    fontWeight:"400",
    color:"#28C2A0"},
    alignSelf:"center",
// Sign Up botton
btn:{
    backgroundColor:"#0C46C4",
    height:51,
    width:"90%",
    marginTop:40,
    //  position:"absolute",bottom:20,
    alignSelf:"center",alignItems:"center",
    justifyContent:"center",borderRadius:10},
dobip:{width:"100%",height:55,
borderWidth:1,borderColor:"#0C46C4", 
padding:10,alignSelf:"center"}
})