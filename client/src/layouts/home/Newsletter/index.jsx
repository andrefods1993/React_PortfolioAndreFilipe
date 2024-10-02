import { useState } from "react";
import { Input, message } from "antd";
import { MailOutlined } from "@ant-design/icons";
import {
	NewsletterContainer,
	Title,
	InputContainer,
	ButtomCustom,
} from "./styles";

const Newsletter = () => {
	const [email, setEmail] = useState("");

	const handleSubmit = async () => {
		if (!email) {
			message.error("Por favor, insira um e-mail válido.");
			return;
		}

		const emailData = {
			name: "Newsletter",
			email: email,
			message: "Inscrição na newsletter",
		};

		try {
			const response = await fetch(
				"https://mailsenderapi-portfolioandrefilipe.onrender.com",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(emailData),
				}
			);

			if (response.ok) {
				message.success("Inscrição realizada com sucesso!");
				setEmail("");
			} else {
				message.error("Erro ao se inscrever. Tente novamente.");
			}
		} catch (error) {
			console.error("Error:", error);
			message.error("Erro ao se inscrever. Tente novamente.");
		}
	};

	return (
		<NewsletterContainer>
			<Title>Pronto para colaborar e construir algo incrível?</Title>
			<InputContainer>
				<Input
					size="large"
					placeholder="Digite seu e-mail"
					prefix={<MailOutlined />}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					style={{
						borderRadius: "8px",
						maxWidth: "400px",
						marginRight: "10px",
					}}
				/>
				<ButtomCustom
					type="primary"
					size="large"
					onClick={handleSubmit}
				>
					Inscreva-se
				</ButtomCustom>
			</InputContainer>
		</NewsletterContainer>
	);
};

export default Newsletter;
