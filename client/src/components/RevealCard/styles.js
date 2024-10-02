import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 200px;
`;

export const Card = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background.paper};
	border: ${({ theme }) => theme.borders.thin};
	border-radius: 20px;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0 1rem;
	z-index: 1;
	transition: all 0.8s ease;

	&:hover {
		border: none;
		box-shadow: ${({ theme }) => theme.shadows.darkShadow};
	}
`;

export const Back = styled.div`
	position: absolute;
	width: 98%;
	height: 98%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	border-radius: 20px;
	z-index: 0;
	transition: all 0.8s ease;

	${CardContainer}:hover & {
		transform: rotate(15deg);
	}
`;

export const Icon = styled.div`
	font-size: 48px;
	color: ${({ theme }) => theme.colors.primary.dark};
	margin-top: 1rem;
	transition: all 0.8s ease;

	${CardContainer}:hover & {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.colors.text.secondary};
	transition: all 0.3s ease;
`;

export const Description = styled.p`
	font-size: 1.1rem;
	font-weight: 400;
	opacity: 0.8;
	transition: all 0.3s ease;
`;
