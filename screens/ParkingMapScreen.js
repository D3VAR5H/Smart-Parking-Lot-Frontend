import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";

import ApiService from "../services/ApiService";

const ParkingMapScreen = ({ navigation }) => {
	const [parkingDetails, setParkingDetails] = useState({});

	const fetchParkingMapDetails = () => {
		ApiService.getParkingLot().then((res) => {
			setParkingDetails({
				slots: res.data.slots,
				total: res.data.slots?.length,
				parked: res.data.slots?.reduce((pv, cv) => (cv.isPresent ? pv + 1 : pv), 0),
			});
		});
	};

	useEffect(() => {
		fetchParkingMapDetails();
		const interval = setInterval(() => {
			fetchParkingMapDetails();
			// setParkingDetails({
			// 	slots: [
			// 		{ isPresent: false, slot: 1 },
			// 		{ isPresent: false, slot: 2 },
			// 		{ isPresent: true, slot: 3 },
			// 		{ isPresent: true, slot: 4 },
			// 		{ isPresent: false, slot: 5 },
			// 		{ isPresent: false, slot: 6 },
			// 		{ isPresent: false, slot: 7 },
			// 		{ isPresent: false, slot: 8 },
			// 	],
			// 	total: 8,
			// 	parked: 2,
			// });
		}, 5000);
		return () => clearInterval(interval);
	});

	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "space-evenly" }}>
			<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
				<Text style={styles.textTitle}>{"Map of Parking Lot"}</Text>
			</View>
			<Text style={styles.gateText}>{"Entry"}</Text>
			<View style={styles.parkingSlots}>
				{parkingDetails.slots?.map((slot, index) => (
					<View key={index} style={[styles.parkingSlot, { backgroundColor: slot?.isPresent ? "#e82113" : "#DDDDDD" }]}>
						<Text style={(styles.gateText, { color: slot?.isPresent ? "white" : "#black" })}>{index + 1}</Text>
					</View>
				))}
			</View>
			<Text style={styles.gateText}>{"Exit"}</Text>

			<View style={styles.parkingStats}>
				<View style={styles.parkingStat}>
					<Text style={styles.parkingStatText}>{`Total Parking Spaces: ${parkingDetails.total ?? 0}`}</Text>
				</View>
				<View style={styles.parkingStat}>
					<Text style={styles.parkingStatText}>{`Cars in Parking: ${parkingDetails.parked ?? 0}`}</Text>
				</View>
			</View>
		</View>
	);
};

export default ParkingMapScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textTitle: {
		marginBottom: 50,
		marginTop: 50,
		fontSize: 18,
		fontWeight: "bold",
	},
	parkingSlots: {
		flex: 3,
		alignItems: "center",
		justifyContent: "space-evenly",
		flexWrap: "wrap",
		maxHeight: 200,
		width: "100%",
	},
	parkingSlot: {
		// flex:1,
		width: 50,
		height: 30,
		margin: 10,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#DDDDDD",
	},
	parkingStats: {
		flex: 1,
		alignItems: "flex-start",
		justifyContent: "center",
	},
	parkingStat: {
		// flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	parkingStatText: {
		// flex: 1,
		// alignItems: "flex-start",
		// justifyContent: "center",
	},
});
