import {
	CardContainer,
	CardContent,
	PhotoOne,
	PhotoTwo,
	BoxOne,
	BoxTwo,
} from "./styles";

const DoublePhotoCard = ({ imageOne, imageTwo }) => {
	return (
		<CardContainer>
			<CardContent>
				<PhotoOne src={imageOne} alt="Foto" />
				<PhotoTwo src={imageTwo} alt="Foto" />
				<BoxOne />
				<BoxTwo />
			</CardContent>
		</CardContainer>
	);
};

export default DoublePhotoCard;
