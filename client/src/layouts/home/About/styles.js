import styled from "styled-components";
import { Button } from "antd";

export const AboutContainer = styled.section`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	background-color: ${({ theme }) => theme.colors.background.paper};
`;

export const AboutContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 80%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
	}
`;

export const ColImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 120%;
	height: 600px;
`;

export const ColAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: flex-start;
	}
`;

export const Title = styled.h2`
	font-size: 2rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.text.secondary};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 2.5rem;
		text-align: start;
	}
`;
export const SubTitle = styled.h3`
	font-size: 1.5rem;
	text-align: center;
	color: ${({ theme }) => theme.colors.primary.main};

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 2rem;
		text-align: start;
	}
`;

export const Description = styled.p`
	font-size: 1rem;
	text-align: center;
	padding-top: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		font-size: 1.2rem;
		text-align: start;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 1rem;
`;

export const DownloadButton = styled(Button)`
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
