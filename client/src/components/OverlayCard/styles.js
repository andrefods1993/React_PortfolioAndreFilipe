import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
	width: 300px;
	height: 300px;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: ${({ theme }) => theme.shadows.mediumShadow};
	transition: transform 0.3s ease;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	&:hover img {
		transform: scale(1.1);
	}

	&:hover > div {
		opacity: 0.7;
	}
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.background.overlay};
	opacity: 0;
	transition: opacity 0.3s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
`;

export const CardContent = styled.div`
	color: ${({ theme }) => theme.colors.primary.contrastText};
	text-align: center;
	line-height: 1.2;

	h3 {
		font-size: 1.5rem;
	}

	p {
		font-size: 1.1rem;
	}
`;
