import nodemailer from "nodemailer";
import config from "../../config/default.js";

const emailUser = config.email.user;
const emailPass = config.email.pass;

console.log(emailUser, emailPass);

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
