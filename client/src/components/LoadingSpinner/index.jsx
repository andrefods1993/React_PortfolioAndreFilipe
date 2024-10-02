import { LoadingContainer, CustomSpin } from "./styles"; // Importando os estilos

const LoadingSpinner = () => {
	return (
		<LoadingContainer>
			<CustomSpin size="large" />
		</LoadingContainer>
	);
};

export default LoadingSpinner;
