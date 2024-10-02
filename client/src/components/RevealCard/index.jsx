import { CardContainer, Card, Icon, Title, Description, Back } from "./styles";
import { FaReact } from "react-icons/fa";

const RevealCard = ({ title, description, icon }) => {
	const IconComponent = icon || <FaReact />;

	return (
		<CardContainer>
			<Card>
				<Icon>{IconComponent}</Icon>
				<Title>{title}</Title>
				<Description>{description}</Description>
			</Card>
			<Back />
		</CardContainer>
	);
};

export default RevealCard;
