import {
	FormContainer,
	ButtomCustom,
	FormInput,
	FormTextArea,
	FormContent,
	FormItem,
} from "./styles";
import { Form, message } from "antd";

const ContactForm = () => {
	const [form] = Form.useForm();

	const onFinish = async (values) => {
		try {
			const response = await fetch(
				"https://mailsenderapi-portfolioandrefilipe.onrender.com/api/send",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(values),
				}
			);

			if (response.ok) {
				message.success("Mensagem enviada com sucesso!");
				form.resetFields();
			} else {
				message.error("Erro ao enviar a mensagem.");
			}
		} catch (error) {
			console.error("Error:", error);
			message.error("Erro ao enviar a mensagem.");
		}
	};

	return (
		<FormContainer>
			<FormContent
				form={form}
				name="contactForm"
				layout="vertical"
				onFinish={onFinish}
				initialValues={{ remember: true }}
			>
				<FormItem
					name="name"
					label="Nome"
					rules={[
						{
							required: true,
							message: "Por favor, insira seu nome!",
						},
					]}
				>
					<FormInput placeholder="Seu nome" />
				</FormItem>

				<FormItem
					name="email"
					label="Email"
					rules={[
						{
							required: true,
							message: "Por favor, insira seu email!",
						},
					]}
				>
					<FormInput placeholder="Seu email" />
				</FormItem>

				<FormItem
					name="message"
					label="Mensagem"
					rules={[
						{
							required: true,
							message: "Por favor, insira sua mensagem!",
						},
					]}
				>
					<FormTextArea rows={4} placeholder="Sua mensagem" />
				</FormItem>

				<FormItem>
					<ButtomCustom type="primary" htmlType="submit">
						Enviar
					</ButtomCustom>
				</FormItem>
			</FormContent>
		</FormContainer>
	);
};

export default ContactForm;
