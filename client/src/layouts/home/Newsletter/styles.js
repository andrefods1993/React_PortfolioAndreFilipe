import styled from "styled-components";
import { Button } from "antd";
import bgNewsletter from "../../../assets/images/bg-newsletter.jpg";

export const NewsletterContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 6rem 2rem;
	background: linear-gradient(rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.7)),
		url(${bgNewsletter});
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
	background-repeat: no-repeat;
`;

export const Title = styled.h2`
	font-size: 2rem;
	text-align: center;
	text-transform: uppercase;
	color: ${({ theme }) => theme.colors.primary.light};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 2.5rem;
	}
`;

export const InputContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	input {
		margin: 0;
	}

	button {
		margin: 0;
	}

	@media (max-width: 768px) {
		flex-direction: column;

		input {
			width: 100%;
		}

		button {
			width: 100%;
			margin: 0;
		}
	}
`;

export const ButtomCustom = styled(Button)`
	&&& {
		background-color: ${({ theme }) => theme.colors.primary.main};
		color: ${({ theme }) => theme.colors.primary.contrastText};
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.dark};
			color: ${({ theme }) => theme.colors.primary.contrastText};
		}
	}
`;
