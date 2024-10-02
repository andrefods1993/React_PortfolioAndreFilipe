import styled, { keyframes } from "styled-components";
import Background from "../../../assets/images/bg-header.png";

const moveBackground = keyframes`
	0% {
		background-position: 0% 0%;
	}
	50% {
		background-position: 100% 0%;
	}
	100% {
		background-position: 0% 0%;
	}
`;

export const HeaderContainer = styled.header`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 7rem 2rem 2rem 2rem;

	background-image: linear-gradient(
			rgba(30, 30, 30, 0.85),
			rgba(12, 12, 12, 1)
		),
		url(${Background});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	animation: ${moveBackground} 100s infinite linear;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		background-size: 120%;
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const ColImg = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	flex: 1;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		order: 2;
	}
`;

export const ColAction = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	flex: 1;
	color: #f1f1f1;

	h2 {
		font-size: 2rem;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.5;
		text-align: center;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: flex-start;

		h2 {
			font-size: 2.5rem;
		}

		p {
			font-size: 1.5rem;
			text-align: left;

			span {
				font-weight: 900;
				color: ${({ theme }) => theme.colors.primary.light};
			}
		}
	}
`;

export const Name = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-size: 4rem;
	font-weight: 900;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		gap: 12px;
		font-size: 5rem;
	}
`;

export const FirstName = styled.span`
	color: #f1f1f1;
`;

export const LastName = styled.span`
	color: ${({ theme }) => theme.colors.primary.main};
`;
