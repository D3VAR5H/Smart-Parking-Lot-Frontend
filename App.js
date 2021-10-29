import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import OtpInputScreen from "./screens/OTPInputScreen";
import AuthenticationScreen from "./screens/AuthenticationScreen";
import ParkingMapScreen from "./screens/ParkingMapScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Authentication" component={AuthenticationScreen} />
				<Stack.Screen name="OtpInput" component={OtpInputScreen} options={{ title: "Input OTP" }} />
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: "Smart Parking Lot" }} />
				<Stack.Screen name="ParkingMap" component={ParkingMapScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
