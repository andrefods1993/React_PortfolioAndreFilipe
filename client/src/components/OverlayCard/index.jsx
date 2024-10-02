import { CardContainer, Overlay, CardContent } from "./styles";

const OverlayCard = ({ image, title, description }) => {
	return (
		<CardContainer>
			<img src={image} alt={title} />
			<Overlay>
				<CardContent>
					<h3>{title}</h3>
					<p>{description}</p>
				</CardContent>
			</Overlay>
		</CardContainer>
	);
};

export default OverlayCard;
