import { Descriptions, Badge } from "antd";
import {
	AiFillInstagram,
	AiFillLinkedin,
	AiFillGithub,
	AiFillMail,
} from "react-icons/ai";
import { IconContainer, StyledIcon, EmailLink } from "./styles";
import { useTheme } from "styled-components"; // Caso use styled-components para tema

const personalData = {
	nome: "André Filipe",
	sobrenome: "Oliveira dos Santos",
	nascimento: "07/1993",
	email: "odsandrefilipe@gmail.com",
	telefone: "(73) 98154-7597",
	linkedin: "https://www.linkedin.com/in/andrefilipeods/",
	github: "https://github.com/andrefods1993",
	instagram: "https://www.instagram.com/in/andrefilipeods/",
	endereco: {
		cidade: "Teixeira de Freitas",
		estado: "BA",
		pais: "Brasil",
	},
};

const PersonalInfo = () => {
	const theme = useTheme();

	return (
		<Descriptions
			bordered
			column={1}
			extra={
				<Badge
					status="processing"
					text="Freelance"
					style={{ color: theme.colors.text.secondary || "#000" }}
				/>
			}
			labelStyle={{
				fontWeight: "bold",
				color: theme.colors.text.secondary || "#000",
			}}
			contentStyle={{ color: theme.colors.text.primary || "#000" }} // Usar cor do tema
		>
			<Descriptions.Item label="Nome">
				{`${personalData.nome} ${personalData.sobrenome}`}
			</Descriptions.Item>
			<Descriptions.Item label="Nascimento">
				{personalData.nascimento}
			</Descriptions.Item>
			<Descriptions.Item label="Email">
				<EmailLink href={`mailto:${personalData.email}`}>
					<AiFillMail /> {personalData.email}
				</EmailLink>
			</Descriptions.Item>
			<Descriptions.Item label="Telefone">
				{personalData.telefone}
			</Descriptions.Item>
			<Descriptions.Item label="Mídias">
				<IconContainer>
					<StyledIcon to={personalData.instagram} target="_blank">
						<AiFillInstagram />
					</StyledIcon>
					<StyledIcon to={personalData.linkedin} target="_blank">
						<AiFillLinkedin />
					</StyledIcon>
					<StyledIcon to={personalData.github} target="_blank">
						<AiFillGithub />
					</StyledIcon>
				</IconContainer>
			</Descriptions.Item>
			<Descriptions.Item label="Endereço">
				<div>
					Cidade: {personalData.endereco.cidade}
					<br />
					Estado: {personalData.endereco.estado}
					<br />
					País: {personalData.endereco.pais}
				</div>
			</Descriptions.Item>
		</Descriptions>
	);
};

export default PersonalInfo;
