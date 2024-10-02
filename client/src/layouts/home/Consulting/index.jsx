import { useEffect } from "react";
import {
	ConsultingContainer,
	ConsultingContent,
	Title,
	Description,
	CarouselContainer,
} from "./styles";
import CarouselCustom from "../../../components/CarouselCustom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import AOS from "aos";

const Consulting = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<ConsultingContainer id="consulting">
			<ConsultingContent>
				<Title>
					<IoChevronBackOutline />
					Consultorias
					<IoChevronForwardOutline />
				</Title>
				<Description>
					Descubra soluções sob medida para o sucesso do seu negócio:
					da gestão eficiente à automação inteligente, explore e
					transforme desafios em oportunidades.
				</Description>
				<CarouselContainer data-aos="fade-left">
					<CarouselCustom />
				</CarouselContainer>
			</ConsultingContent>
		</ConsultingContainer>
	);
};

export default Consulting;
