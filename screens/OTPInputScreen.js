import React, { useEffect, useRef, useState } from "react";
import { Button, View, Text, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";
import ApiService from "../services/ApiService";

const OtpInputScreen = ({ navigation, ...rest }) => {
	const [OTP, setOTP] = useState("");

	const textInput = useRef(null);

	const onPressContinue = () => {
		ApiService.verifyOTP({ otp: OTP, contact_number: rest.route.params.phoneNumber }).then((res) => {
			navigation.navigate("ParkingMap");
		});
	};

	useEffect(() => {
		textInput.current.focus();
	}, []);

	return (
		<View style={styles.container}>
			<KeyboardAvoidingView keyboardVerticalOffset={50} behavior={"padding"} style={styles.containerAvoidingView}>
				<Text style={styles.textTitle}>{"Input your OTP"}</Text>
				<View>
					<TextInput
						style={{ width: 0, height: 0 }}
						keyboardType="numeric"
						value={OTP}
						maxLength={6}
						returnKeyType="done"
						onChangeText={(otp) => setOTP(otp)}
						ref={textInput}
					/>
					<TouchableWithoutFeedback onPress={() => textInput.current.focus()}>
						<View style={[styles.containerInput]}>
							{Array(6)
								.fill("")
								.map((_, index) => (
									<View
										key={index}
										style={[
											styles.cellView,
											{ borderBottomColor: index === OTP?.length && textInput?.current?.isFocused() ? "#FB6C6A" : "#234DB7" },
										]}>
										<Text style={styles.cellText}>{OTP && OTP?.length > 0 ? OTP[index] : ""}</Text>
									</View>
								))}
						</View>
					</TouchableWithoutFeedback>
				</View>
				<View style={styles.viewBottom}>
					<TouchableOpacity onPress={onPressContinue}>
						<View style={[styles.btnContinue, { backgroundColor: OTP.length === 6 ? "#244DB7" : "gray" }]}>
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
	},
	textTitle: {
		marginBottom: 50,
		marginTop: 50,
		fontSize: 15,
	},
	containerInput: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	cellView: {
		paddingVertical: 10,
		height: 50,
		width: 40,
		margin: 5,
		backgroundColor: "white",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		borderBottomWidth: 1.5,
	},
	cellText: {
		textAlign: "center",
		fontSize: 16,
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

export default OtpInputScreen;
