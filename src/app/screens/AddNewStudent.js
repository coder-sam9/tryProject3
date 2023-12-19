import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import TopNotchDesign from "../components/TopNotchDesign";
import ModTextInput from "../components/ModTextInput";

export default function AddNewStudent(params) {
    return(
        <SafeAreaView>
            <StatusBar/>
            
            <ModTextInput placeholder={"Enter Something"}/>
        </SafeAreaView>
    )
}