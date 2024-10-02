import "dotenv/config";

const config = {
	port: process.env.PORT || 5000,
	email: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
};

export default config;
