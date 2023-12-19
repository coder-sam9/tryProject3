import React, { useState,useEffect } from "react";
import AppointmentSlot from "../components/AppointmentSlot";
import { Text, Touchable, View , SafeAreaView ,TouchableOpacity, FlatList, StyleSheet, Alert, ScrollView, Dimensions,TextInput, ActivityIndicator, Button} from "react-native";
// import { FlatList } from "react-native-gesture-handler";
import styling from "../styles/styling";
import axios, { Axios } from "axios";


export default function SlotBookingScreen({navigation}) { 
  const screenHeight=Dimensions.get("screen").height;
  const[selectedTime,setSelectedTime]=useState('');
  const[selectedDate,setSelectedDate]=useState();
  const [timeSlot,setTimeSlot]=useState();
  const [dateSlot,setDateSlot]=useState();
  const [reason,setReason]=useState();
  const [loading,setLoading]=useState(false);
  let datee = new Date().getDate();
  let month = new Date().getMonth();
  let year=new Date().getFullYear();
  let dayOfWeek = new Date().getDay();
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let selected;
  const Todaytiming=[];
  const days=[];
  const  months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const daysOfWeek =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  useEffect(()=>{
    getCurrentSlots();
  },[]);
  const getCurrentSlots = () => {
    try {
      // Set hours to 7 if it's currently before 7 AM
      if (hours < 7) {
        hours = 7;
        minutes=0;
      }
      if(minutes>0 && minutes<30) minutes=30;
      if(minutes>30 && minutes<60){
        minutes=0;
        hours++;
      }
      
      // Loop through the desired time range (7 AM - 8 PM)
      
      for (let j = 1; hours < 20; j++) {
        const ampm = hours >= 12 ? 'pm' : 'am';
        const formattedTime = `${hours % 12 || 12}:${minutes === 0 ? '00' : minutes} ${ampm}`;
        
        Todaytiming.push({
          id: j,
          time: formattedTime,
          Hours24Time:`${hours}:${minutes === 0 ? '00' : minutes}`
        });
        
        
        minutes += 30;
        
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
    } catch (error) {
      console.error("getCurrentSlots error:", error);
    }
  };
  
  getCurrentSlots();
   
// console.log("\n date is "+datee+" month is "+(month+1));
     for (let i = 0; i <7; i++) {
      let obj={};
      obj['id']=i+1;
      obj['date']=`${datee+i}-${months[month]}`;
      obj['day']=daysOfWeek[(dayOfWeek+i)%7];
      obj['formattedDate']=`${year}-${month}-${datee+i}`

      days.push(obj);
      
     }
     const Hardtiming = [
      { id: 1, time: "7:00 am", Hours24Time: "07:00" },
      { id: 2, time: "7:30 am", Hours24Time: "07:30" },
      { id: 3, time: "8:00 am", Hours24Time: "08:00" },
      { id: 4, time: "8:30 am", Hours24Time: "08:30" },
      { id: 5, time: "9:00 am", Hours24Time: "09:00" },
      { id: 6, time: "9:30 am", Hours24Time: "09:30" },
      { id: 7, time: "10:00 am", Hours24Time: "10:00" },
      { id: 8, time: "10:30 am", Hours24Time: "10:30" },
      { id: 9, time: "11:00 am", Hours24Time: "11:00" },
      { id: 10, time: "11:30 am", Hours24Time: "11:30" },
      { id: 11, time: "12:00 pm", Hours24Time: "12:00" },
      { id: 12, time: "12:30 pm", Hours24Time: "12:30" },
      { id: 13, time: "1:00 pm", Hours24Time: "13:00" },
      { id: 14, time: "1:30 pm", Hours24Time: "13:30" },
      { id: 15, time: "2:00 pm", Hours24Time: "14:00" },
      { id: 16, time: "2:30 pm", Hours24Time: "14:30" },
      { id: 17, time: "3:00 pm", Hours24Time: "15:00" },
      { id: 18, time: "3:30 pm", Hours24Time: "15:30" },
      { id: 19, time: "4:00 pm", Hours24Time: "16:00" },
      { id: 20, time: "4:30 pm", Hours24Time: "16:30" },
      { id: 21, time: "5:00 pm", Hours24Time: "17:00" },
      { id: 22, time: "5:30 pm", Hours24Time: "17:30" },
      { id: 23, time: "6:00 pm", Hours24Time: "18:00" },
      { id: 24, time: "6:30 pm", Hours24Time: "18:30" },
      { id: 25, time: "7:00 pm", Hours24Time: "19:00" },
    ];
    
    
    
    const appointment= async ()=>{
      setLoading(true);
      const appointmentData={
        input:{

          patientId:"1",doctorId:"1",
          appointmentdate:dateSlot,
          appointmenttime:timeSlot,
          appointmenfor:reason,
        },
      }
      if(dateSlot==undefined || timeSlot==undefined){
        setLoading(false);
        Alert.alert("Please select proper date nd time");
      }
      else {
        const response=await axios.post("https://midoc-api-dev.azurewebsites.net/api/midoc_bookappointment",appointmentData);
        setLoading(false);
        console.log(response);
        Alert.alert(`${response.data.output.result}`, `your apppointment is confirmed at ${dateSlot} and ${timeSlot} for ${reason} and appointment id is ${response.data.output.id}`)
      }
      console.log("\nInput for the appointment API is this"+appointmentData);
      console.log(appointmentData);
      navigation.navigate("Location");
    }
    
    
    return(
      <SafeAreaView style={{flex:1,backgroundColor:"#FFF",padding:20,justifyContent:"center",alignItems:"center"}}>
          <ScrollView>
            <View style={{backgroundColor:"#c0c0c0",width:"100%",height:screenHeight*0.4}}>

            <Text>
                Doctors info
            </Text>
            <Text>{`${timeSlot}`}</Text>
            </View>
            <ActivityIndicator animating={loading} size={'large'}/>
<Text>
               BOOK APPOINTMENT
            </Text>
            <Text style={{fontWeight:"600",color:"black",fontSize:20,marginTop:15,marginBottom:10}}>
                Day
            </Text>
            <FlatList showsHorizontalScrollIndicator={false} horizontal data={days} keyExtractor={item=>item.id}
            renderItem={({item})=>{
                 selected=item.id===selectedDate;
               return(
               <TouchableOpacity onPress={()=>[setSelectedDate(item.id),setDateSlot(item.formattedDate)]} style={
                selected?styling.slotSelected:styling.slotBookingOptions}>
                    <Text style={{color:selected?"white":"black",fontWeight:"300"}}>{`${item.day}`}</Text>
                    <Text style={{color:selected?"white":"black",fontWeight:"500"}}>{`${item.date}`}</Text>
                    </TouchableOpacity>)
            }}/>
          
<Text style={{fontWeight:"600",color:"black",fontSize:20,}}>
    Time
</Text>
<FlatList showsHorizontalScrollIndicator={false} horizontal 
// data={Hardtiming} 
data={selectedDate==1?Todaytiming:Hardtiming}

keyExtractor={item=>item.id}
            renderItem={({item})=>{
                let selected2=item.id===selectedTime;
               return(
               <TouchableOpacity onPress={()=>[setSelectedTime(item.id),setTimeSlot(item.Hours24Time)]} style={
                selected2?styling.slotSelected:styling.slotBookingOptions
                }>
                    <Text style={{color:selected2?"white":"black",fontWeight:"500"}}>{`${item.time}`}</Text>
                    </TouchableOpacity>)
            }}/>
 <TouchableOpacity style={styling.ScheduleRequest}>

<Text>
    Want a custom schedule?       
</Text>
<Text style={{color:"blue"}}>
          Request Schedule
</Text>
</TouchableOpacity> 
{/* </View> */}
  <View style={{width:"95%",alignSelf:"center",margin:5,borderWidth:1,borderColor:"blue"}}>
<TextInput placeholder="Enter Reason" style={{color:"black",}} placeholderTextColor={"grey"} onChangeText={(text)=>setReason(text)}/>
</View>
        <TouchableOpacity onPress={()=>appointment()} style={styling.appointmentBtn}>
            <Text style={{color:"white",fontSize:15,fontWeight:"500"}}>
                Make Appointment
            </Text>
        </TouchableOpacity>  
</ScrollView>

        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    daaate:{width:130,height:55,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1,}
})