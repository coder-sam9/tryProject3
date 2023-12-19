import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
    return(
        <SafeAreaView>
            <StatusBar/>
            <Text>
                Hello its a home Screen
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
                <Text>
                    Details Screen
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}