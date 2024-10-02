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
	const [email, setEmail] = useState(""); // Estado para armazenar o e-mail

	const handleSubmit = async () => {
		if (!email) {
			message.error("Por favor, insira um e-mail válido.");
			return;
		}

		// Criando um objeto com os dados a serem enviados
		const emailData = {
			name: "Newsletter", // Nome padrão ou você pode solicitar um input do usuário
			email: email,
			message: "Inscrição na newsletter", // Mensagem padrão
		};

		try {
			const response = await fetch("http://localhost:5000/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(emailData), // Enviando o objeto com nome, e-mail e mensagem
			});

			if (response.ok) {
				message.success("Inscrição realizada com sucesso!");
				setEmail(""); // Limpando o campo de e-mail após o envio
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
					value={email} // Atribuindo o valor do estado ao Input
					onChange={(e) => setEmail(e.target.value)} // Atualizando o estado ao digitar
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
