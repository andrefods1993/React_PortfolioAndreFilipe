import styled from "styled-components";
import { FloatButton } from "antd";

export const StyledFloatButton = styled(FloatButton)`
	position: fixed;
	bottom: 24px;
	right: 24px;
	background-color: ${({ theme }) => theme.colors.background.paper};
	box-shadow: ${({ theme }) => theme.shadows.mediumShadow};
	border-radius: 50%;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.4s, transform 0.4s;

	&:hover {
		background-color: ${({ theme }) => theme.colors.secondary.contrastText};
		transform: scale(1.1);
	}

	&:active {
		transform: scale(0.9);
	}

	@media (max-width: 768px) {
		width: 2rem;
		height: 2rem;
	}
`;

export const IconWrapper = styled.div`
	font-size: 0.875rem;
	color: ${({ theme }) => theme.colors.secondary.dark};
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		font-size: 0.625rem;
	}
`;
