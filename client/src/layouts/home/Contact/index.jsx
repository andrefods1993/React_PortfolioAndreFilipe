import { useEffect } from "react";
import ContactForm from "../../../components/ContactForm";
import {
	ContactContainer,
	ContactContent,
	Title,
	MapContainer,
	FormContainer,
	InfoContainer,
	InfoItem,
	IconCircle,
	InfoTitle,
	InfoDescription,
} from "./styles";
import {
	FaComments,
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
} from "react-icons/fa";
import AOS from "aos";

const Contact = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<ContactContainer id="contact">
			<Title>
				<FaComments />
				Entre em Contato
			</Title>
			<InfoContainer data-aos="fade-up">
				<InfoItem>
					<IconCircle>
						<FaMapMarkerAlt />
					</IconCircle>
					<InfoTitle>Endereço</InfoTitle>
					<InfoDescription>
						Teixeira de Freitas / Bahia
					</InfoDescription>
				</InfoItem>

				<InfoItem>
					<IconCircle>
						<FaPhoneAlt />
					</IconCircle>
					<InfoTitle>Telefone</InfoTitle>
					<InfoDescription>(73) 98154-7597</InfoDescription>
				</InfoItem>

				<InfoItem>
					<IconCircle>
						<FaEnvelope />
					</IconCircle>
					<InfoTitle>Email</InfoTitle>
					<InfoDescription>odsandrefilipe@gmail.com</InfoDescription>
				</InfoItem>
			</InfoContainer>
			<ContactContent>
				<FormContainer data-aos="fade-right">
					<ContactForm />
				</FormContainer>
				<MapContainer data-aos="fade-left">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7608.685264720084!2d-39.74386617668318!3d-17.53886642583805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73546a9c0f417ef%3A0x998e8c1f371f1c5b!2sTeixeira%20de%20Freitas%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1727843075080!5m2!1spt-BR!2sbr"
						allowFullScreen=""
						loading="lazy"
						title="Teixeira de Freitas / Bahia"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</MapContainer>
			</ContactContent>
		</ContactContainer>
	);
};

export default Contact;
