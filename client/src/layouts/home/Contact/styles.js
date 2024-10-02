import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Aumenta o ícone em 10% */
  }
  100% {
    transform: scale(1);
  }
`;

export const ContactContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 6rem 2rem;
	background-color: ${({ theme }) => theme.colors.background.default};
`;

export const ContactContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 80%;
	padding-top: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 70%;
	padding: 2rem 0;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const InfoItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

export const IconCircle = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.colors.primary.main};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.colors.primary.contrastText};
	font-size: 1.3rem;
	animation: ${pulse} 1.5s infinite ease-in-out;
`;

export const InfoTitle = styled.h3`
	font-size: 1.5rem;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.colors.text.secondary};
`;

export const InfoDescription = styled.p`
	font-size: 1rem;
`;

export const FormContainer = styled.div`
	width: 100%;
	margin-bottom: 2rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 50%;
	}
`;

export const MapContainer = styled.div`
	width: 100%;
	height: 200px;

	iframe {
		border: 0;
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		box-shadow: ${({ theme }) => theme.shadows.mediumShadow};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 50%;
		height: 380px;
	}
`;

export const Title = styled.h2`
	font-size: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.text.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 2.5rem;
	}
`;
