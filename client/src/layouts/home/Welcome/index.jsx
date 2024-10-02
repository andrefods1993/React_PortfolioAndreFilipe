import { useEffect } from "react";
import {
	WelcomeContainer,
	WelcomeContent,
	Title,
	Description,
	CardsContainer,
} from "./styles";
import {
	IoRocketOutline,
	IoFlashOutline,
	IoDiamondOutline,
	IoChevronBackOutline,
	IoChevronForwardOutline,
} from "react-icons/io5";
import RevealCard from "../../../components/RevealCard";
import AOS from "aos";

const Welcome = () => {
	const introCard = [
		{
			title: "Inovador",
			description: "Soluções inovadoras para desafios complexos.",
			icon: <IoDiamondOutline />,
		},
		{
			title: "Proativo",
			description: "Antecipar problemas e agir rapidamente.",
			icon: <IoFlashOutline />,
		},
		{
			title: "Versátil",
			description:
				"Adaptar-me rapidamente a novas ferramentas e ambientes.",
			icon: <IoRocketOutline />,
		},
	];

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<WelcomeContainer>
			<WelcomeContent>
				<Title>
					<IoChevronBackOutline />
					Bem vindo ao meu mundo
					<IoChevronForwardOutline />
				</Title>
				<Description>
					Sou apaixonado por tecnologia e empreendedorismo, sempre
					buscando inovação e superação de limites.
				</Description>
				<CardsContainer data-aos="fade-up">
					{introCard.map((card, index) => (
						<RevealCard
							key={index}
							title={card.title}
							description={card.description}
							icon={card.icon}
						/>
					))}
				</CardsContainer>
			</WelcomeContent>
		</WelcomeContainer>
	);
};

export default Welcome;
