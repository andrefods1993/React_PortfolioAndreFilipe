import { useEffect } from "react";
import {
	AboutContainer,
	AboutContent,
	ColImg,
	ColAbout,
	Title,
	SubTitle,
	Description,
	Info,
} from "./styles";
import PersonalInfo from "../../../components/PersonalInfo";
import DoublePhotoCard from "../../../components/DoublePhotoCard";
import PhotoImg from "../../../assets/images/photo-profile.jpg";
import AOS from "aos";

const About = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<AboutContainer id="about">
			<AboutContent>
				<ColImg data-aos="fade-right">
					<DoublePhotoCard imageOne={PhotoImg} imageTwo={PhotoImg} />
				</ColImg>
				<ColAbout data-aos="fade-left">
					<SubTitle>Sobre mim</SubTitle>
					<Title>Debugando Minha Jornada</Title>
					<Description>
						Sou um entusiasta da tecnologia, com formação em
						Engenharia de Software pela Faculdade Estácio e
						Processos Gerenciais pela Faculdade ISEIB Belo
						Horizonte. Tenho habilidades em JavaScript, Angular,
						React, Python, NodeJS e Power BI, além de experiência em
						consultoria de implantação de software.
					</Description>
					<Description>
						Atualmente, estou em busca de oportunidades desafiadoras
						para aplicar meu conhecimento e contribuir com equipes
						dinâmicas na criação de soluções tecnológicas de
						impacto. Meu objetivo é colaborar em projetos
						inovadores, transformando ideias em realidade digital e
						ajudando a construir um futuro mais eficiente e
						conectado.
					</Description>
					<Info>
						<PersonalInfo />
					</Info>
				</ColAbout>
			</AboutContent>
		</AboutContainer>
	);
};

export default About;
