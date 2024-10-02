import styled from "styled-components";

export const CardWrapper = styled.div`
	width: 220px;
	height: 380px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	padding: 1.5rem;
	border-radius: 1rem;
	background-color: ${({ theme }) => theme.colors.background.card};
	box-shadow: ${({ theme }) => theme.shadows.lightShadow};
	transition: all 0.3s ease-in-out;

	&:hover {
		box-shadow: ${({ theme }) => theme.shadows.darkShadow};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
		width: 240px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 260px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
		width: 280px;
	}
`;

export const IconWrapper = styled.div`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 1rem;
	transition: all 0.3s ease-in-out;

	svg {
		color: ${({ theme }) => theme.colors.primary.contrastText};
		font-size: 40px;
		transition: color 0.3s ease-in-out;
	}

	${CardWrapper}:hover & {
		background-color: ${({ theme }) => theme.colors.secondary.main};

		svg {
			color: ${({ theme }) => theme.colors.primary.contrastText};
		}
	}
`;

export const CardTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 1rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.text.primary};
`;

export const CardDescription = styled.p`
	font-size: 1rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.text.secondary};
`;
