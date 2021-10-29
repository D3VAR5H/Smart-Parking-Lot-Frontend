import Api from "./Api";

export default {
	verifyOTP(credentials) {
		return Api().post("verify-otp", credentials);
	},
	getParkingLot() {
		return Api().get("get-parking-lot");
	},
};
