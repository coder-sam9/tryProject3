import { View, Text, SafeAreaView, Button, PermissionsAndroid } from 'react-native';
import React, { useEffect } from 'react';
import BackgroundTimer from 'react-native-background-timer';
import Geolocation from 'react-native-geolocation-service';

// Main component responsible for handling location tracking and background tasks
const MapScreen = () => {

  // This function requests permission to access the user's location using PermissionsAndroid
  const getLocationPermission = async () => {
    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
    if (granted === 'granted') {
      console.log("Location permission granted. Now we can track the user's position.");
    } else {
      console.warn("Location permission denied. Cannot track user location.");
    }
  };

  // This function uses Geolocation to get the user's current location
  const showLoc = async () => {
    console.warn("Getting user's current location...");
    Geolocation.getCurrentPosition(
      (position) => {
        console.log("Got user's location:", position);
        // You can uncomment these lines to display the location coordinates and navigate to another screen
        // Alert.alert("Location is", `${position.coords.longitude} long is this ${position.coords.latitude}`);
        // navigation.navigate("Landing");
      },
      (error) => {
        console.error("Error getting location:", error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 } // options for geolocation accuracy and caching
    );
  };

  // This useEffect hook requests location permission on initial render
  useEffect(() => {
    getLocationPermission();
  }, []);

  // Flag to track whether the background task is running (starts as true)
  let task = true;

  // This function starts or stops the background task that retrieves the user's location every 3 seconds
  const StartStopTask = () => {
    if (task) {
      console.log("Starting background task to track location every 3 seconds...");
      console.log("Hello from the background task!");
      BackgroundTimer.runBackgroundTimer(() => {
        console.log("Background task is running...");
        showLoc(); // Get the user's location
      }, 3000); // Run the task every 3 seconds
    } else {
      console.log("Stopping background task...");
      BackgroundTimer.stopBackgroundTimer();
    }
    // Invert the task flag to switch between starting and stopping
    task = !task;
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#c0c0c0", flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Commented out text as it was redundant and unnecessary */}
      <Button title="Start/Stop" onPress={() => StartStopTask()} />
    </SafeAreaView>
  );
};

export default MapScreen;
