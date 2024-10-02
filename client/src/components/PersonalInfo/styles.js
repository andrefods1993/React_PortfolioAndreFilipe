import styled from "styled-components";
import { Link } from "react-router-dom";

export const IconContainer = styled.div`
	display: flex;
	justify-content: space-around;
`;

export const StyledIcon = styled(Link)`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.primary.main};
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.dark};
	}
`;

export const EmailLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 0.5rem;
`;
