import {
	PortfolioContainer,
	PortfolioContent,
	Title,
	Description,
} from "./styles";
import TabsWithCards from "../../../components/TabsWithCards";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const Portfolio = () => {
	return (
		<PortfolioContainer id="portfolio">
			<PortfolioContent>
				<Title>
					<IoChevronBackOutline />
					Meu Universo Criativo
					<IoChevronForwardOutline />
				</Title>
				<Description>Explore, Inspire-se e Colabore!</Description>
				<TabsWithCards />
			</PortfolioContent>
		</PortfolioContainer>
	);
};

export default Portfolio;
