import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<View style={styles.btn}>
				<Button title="Parking Lot Map" onPress={() => navigation.navigate("ParkingMap")} />
			</View>
			<View style={styles.btn}>
				<Button title="Open Gate" onPress={() => navigation.navigate("Authentication")} />
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	btn: {
		width: 200,
		height: 50,
		borderRadius: 10
	},
});
