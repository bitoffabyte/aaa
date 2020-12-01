import firebase from "firebase";
import axios from "axios";
export const checkIfExists = async (email) => {
	try {
		const user = await axios.ge(`url/email?email=${email}`);
		return user;
	} catch (error) {
		return null;
	}
};

export const chkUser = (email) => {
	// check if user exists and then return true/false
	return true;
};
