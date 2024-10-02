import styled from "styled-components";

export const ConsultingContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const ConsultingContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.text.secondary};
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	text-align: center;
	gap: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 2.5rem;
	}
`;

export const Description = styled.p`
	text-align: center;
	width: 90%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1.2rem;
		width: 60%;
	}
`;
export const CarouselContainer = styled.div`
	width: 100%;
	margin-top: 2rem;
`;
