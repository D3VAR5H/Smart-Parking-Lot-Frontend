import axios from "axios";

export default () => {
	return axios.create({
		baseURL: "https://iot-smart-parking-lot.herokuapp.com",
		// baseURL: "http://localhost:5000",
		headers: {
			"Content-Type": "application/json",

			// authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});
};
