import nodemailer from "nodemailer";
import config from "config";

const emailUser = config.get("email.user");
const emailPass = config.get("email.pass");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 587,
	secure: false,
	auth: {
		user: emailUser,
		pass: emailPass,
	},
});

export default transporter;
