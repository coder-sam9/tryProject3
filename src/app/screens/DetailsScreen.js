import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";


export default function DetailsScreen({navigation}) {
    return(
        <SafeAreaView>
            <Text>

                Its Details Screen
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                <Text>
                    click to Sign Up Screen
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>
                    Hello
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}