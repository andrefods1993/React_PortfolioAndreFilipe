import {
	FooterContainer,
	FooterContent,
	FooterLinks,
	FooterLinkItem,
	FooterSocial,
	SocialIcon,
	FooterCopy,
} from "./styles";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const menu = [
	{ label: "Home", path: "home" },
	{ label: "Sobre Mim", path: "about" },
	{ label: "Portfólio", path: "portfolio" },
	{ label: "Consultorias", path: "consulting" },
	{ label: "Contato", path: "contact" },
];

const Footer = () => {
	const handleScrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<FooterContainer>
			<FooterContent>
				<FooterLinks>
					{menu.map((item) => (
						<FooterLinkItem
							key={item.path}
							onClick={() => handleScrollToSection(item.path)}
						>
							{item.label}
						</FooterLinkItem>
					))}
				</FooterLinks>
				<FooterSocial>
					<SocialIcon
						to={"https://www.instagram.com/in/andrefilipeods/"}
						target="_blank"
					>
						<AiFillInstagram />
					</SocialIcon>
					<SocialIcon
						to={"https://www.linkedin.com/in/andrefilipeods/"}
						target="_blank"
					>
						<AiFillLinkedin />
					</SocialIcon>
					<SocialIcon
						to={"https://github.com/andrefods1993"}
						target="_blank"
					>
						<AiFillGithub />
					</SocialIcon>
				</FooterSocial>
				<FooterCopy>
					&copy; {new Date().getFullYear()} André Filipe. Todos os
					direitos reservados.
				</FooterCopy>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
