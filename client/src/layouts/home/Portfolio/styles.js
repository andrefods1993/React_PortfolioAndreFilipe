import styled from "styled-components";

export const PortfolioContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	background-color: ${({ theme }) => theme.colors.background.default};
`;

export const PortfolioContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 80%;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.primary.dark};
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
