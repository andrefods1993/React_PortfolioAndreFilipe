import styled from "styled-components";
import { Link } from "react-router-dom";
import Background from "../../assets/images/bg-footer.jpg";

export const FooterContainer = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	background-image: ${({ theme }) => theme.colors.background.footer},
		url(${Background});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 80%;
	gap: 1rem;
`;

export const FooterLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	flex-wrap: wrap;
`;

export const FooterLinkItem = styled(Link)`
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.primary.contrastText};
	text-decoration: none;
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;

export const FooterSocial = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const SocialIcon = styled(Link)`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primary.contrastText};
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;

export const FooterCopy = styled.div`
	font-size: 0.9rem;
	color: ${({ theme }) => theme.colors.gray[500]};
`;
