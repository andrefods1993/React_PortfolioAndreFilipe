import {
	CardWrapper,
	IconWrapper,
	CardDescription,
	CardTitle,
} from "./styles";

const ServiceCard = ({ icon, title, description }) => {
	return (
		<CardWrapper>
			<IconWrapper>{icon}</IconWrapper>
			<CardTitle>{title}</CardTitle>
			<CardDescription>{description}</CardDescription>
		</CardWrapper>
	);
};

export default ServiceCard;
