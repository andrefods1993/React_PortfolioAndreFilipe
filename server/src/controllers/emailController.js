import transporter from "../config/nodemailer-config.js";
import config from "../../config/default.js";

const emailUser = config.email.user;

export const sendEmail = async (req, res) => {
	const { name, email, message } = req.body;

	const mailOptions = {
		from: email,
		to: emailUser,
		subject: `Novo contato de ${name}`,
		text: `Contato: ${name} - E-mail: ${email} - Mensagem: ${message}`,
	};

	try {
		await transporter.sendMail(mailOptions);
		res.status(200).send("E-mail enviado com sucesso!");
	} catch (error) {
		console.error("Erro ao enviar o e-mail:", error);
		res.status(500).send("Erro ao enviar o e-mail.");
	}
};
