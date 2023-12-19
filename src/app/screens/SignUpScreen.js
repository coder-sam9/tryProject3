import React, { useRef } from "react";
import { Button, SafeAreaView, StatusBar, Text ,TouchableOpacity} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const SignUpScreen = ({ navigation }) => {
  const datePickerRef = useRef(null);

  const showDatePicker = () => {
    console.log("hello")
    if (datePickerRef.current) {
      datePickerRef.current.showDatePicker();
    }
  };

  const hideDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.hideDatePicker();
    }
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    // setDob(date); // Assuming setDob is defined elsewhere
    hideDatePicker();
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <Text>Sign Up Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Home Screen</Text>
      </TouchableOpacity>
      <Button title="Select Date" onPress={showDatePicker} />
      <TouchableOpacity onPress={showDatePicker}>
        <Text>Select Date</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={false} // Set this to false initially
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        ref={datePickerRef}
      />
    </SafeAreaView>
  );
};

export default SignUpScreen;
