import { CardContainer, Card, Photo, BackLayer, BoxContainer } from "./styles";

const PhotoCard = ({ image, projectsValue, skillsValue }) => {
	return (
		<CardContainer>
			<BackLayer />
			<Card>
				<Photo src={image} alt="Foto" />
			</Card>
			<BoxContainer top="10%" left="-20%">
				<h1>{projectsValue}</h1>
				<span>Total de Projetos</span>
			</BoxContainer>
			<BoxContainer top="75%" left="65%">
				<h1>{skillsValue}</h1>
				<span>Total de Skills</span>
			</BoxContainer>
		</CardContainer>
	);
};

export default PhotoCard;
