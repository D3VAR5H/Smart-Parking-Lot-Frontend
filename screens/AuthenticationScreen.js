import React, { useState } from "react";
import { Button, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity } from "react-native";

const AuthenticationScreen = ({ navigation }) => {
	const [phoneNumber, setPhoneNumber] = useState("");

	const onPressContinue = () => {
		if (phoneNumber?.length===10) navigation.navigate("OtpInput",{phoneNumber});
	};

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView keyboardVerticalOffset={50} behavior={"padding"} style={styles.containerAvoidingView}>
				<Text style={styles.textTitle}>{"Please Input your Mobile Number"}</Text>
				<View
					style={[
						styles.containerInput,
						{
							borderBottomColor: "#244DB7",
						},
					]}>
					<View style={styles.openDialogueView}>
						<Text>{"+91 |"}</Text>
					</View>
					<TextInput
						style={styles.phoneInputStyle}
						placeholder="1234567890"
						keyboardType="numeric"
						value={phoneNumber}
						onChangeText={(number) => setPhoneNumber(number)}
						secureTextEntry={false}
					/>
				</View>
				<View style={styles.viewBottom}>
					<TouchableOpacity onPress={onPressContinue}>
						<View style={[styles.btnContinue, { backgroundColor: phoneNumber.length===10 ? "#244DB7" : "gray" }]}>
							<Text style={styles.textContinue}>{"Continue"}</Text>
						</View>
					</TouchableOpacity>
				</View>
			</KeyboardAvoidingView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerAvoidingView: {
		flex: 1,
		alignItems: "center",
		padding: 10,
		justifyContent: "space-between",
	},
	textTitle: {
		marginBottom: 50,
		marginTop: 50,
		fontSize: 15,
	},
	containerInput: {
		flexDirection: "row",
		paddingHorizontal: 12,
		borderRadius: 10,
		alignItems: "center",
		backgroundColor: "white",
		borderBottomWidth: 1.5,
	},
	openDialogueView: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	phoneInputStyle: {
		marginLeft: 5,
		flex: 1,
		height: 50,
	},
	viewBottom: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 50,
		alignItems: "center",
	},
	btnContinue: {
		width: 150,
		height: 50,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	textContinue: {
		color: "#FFFFFF",
		alignItems: "center",
	},
});

export default AuthenticationScreen;
