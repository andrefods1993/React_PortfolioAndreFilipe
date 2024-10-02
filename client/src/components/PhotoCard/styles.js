import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
	0% {
		transform: rotate(45deg);
	}
	100% {
		transform: rotate(30deg);
	}
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const Card = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 270px;
	height: 400px;
	overflow: hidden;
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.shadows.mediumShadow};
	z-index: 1;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 300px;
		height: 420px;
	}
`;

export const Photo = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: 600ms;

	&:hover {
		transform: scale(1.5);
	}
`;

export const BackLayer = styled.div`
	position: absolute;
	width: 100%;
	height: 90%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	border-radius: 1rem;
	transform: rotate(30deg);
	animation: ${rotateAnimation} 3s infinite alternate ease-in-out;
`;

export const BoxContainer = styled.div`
	position: absolute;
	width: 175px;
	display: none;
	justify-content: center;
	align-items: center;
	text-align: center;
	gap: 0.5rem;
	background-color: ${({ theme }) => theme.colors.background.default};
	border-radius: 1rem;
	box-shadow: ${({ theme }) => theme.shadows.lightShadow};
	text-transform: uppercase;
	padding: 0.5rem 1rem;
	line-height: 1.2;
	z-index: 2;
	top: ${({ top }) => top || "0"};
	left: ${({ left }) => left || "0"};

	h1 {
		font-size: 2.5rem;
		margin: 0;
		padding: 0;
		color: ${({ theme }) => theme.colors.primary.main};
	}

	span {
		color: ${({ theme }) => theme.colors.text.secondary};
		font-weight: 800;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		display: flex;
	}
`;
