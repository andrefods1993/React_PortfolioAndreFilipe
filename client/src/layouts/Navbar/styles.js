import { Drawer, Button } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.nav`
	position: fixed;
	top: 24px;
	left: 50%;
	transform: translateX(-50%);
	width: 80%;
	max-width: 1200px;
	background-color: ${({ theme }) => theme.colors.background.nav};
	backdrop-filter: blur(2px);
	border-radius: 20px;
	box-shadow: ${({ theme }) => theme.shadows.mediumShadow};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 24px;
	z-index: 1000;
	transition: background-color 0.3s ease;
`;

export const NavLogo = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	display: flex;
	justify-content: center;
	align-items: center;

	span {
		font-weight: normal;
		color: ${({ theme }) => theme.colors.primary.main};
	}

	.icon {
		font-size: 1.5rem;
		margin-right: 2px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const NavMenu = styled.div`
	display: flex;
	gap: 2rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled(Link)`
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.text.primary};
	text-decoration: none;
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;

export const ToggleButton = styled(Button)`
	display: none;
	background-color: ${({ theme }) => theme.colors.primary.main};
	color: ${({ theme }) => theme.colors.secondary.main};
	border: none;
	border-radius: 12px;
	font-size: 1.2rem;
	padding: 8px 12px;
	transition: all 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: ${({ theme }) =>
			theme.colors.secondary.main} !important;
		color: ${({ theme }) => theme.colors.primary.main} !important;
	}

	@media (max-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const StyledDrawer = styled(Drawer)`
	.ant-drawer-body {
		background-color: ${({ theme }) => theme.colors.background.paper};
		padding: 2rem;
		color: ${({ theme }) => theme.colors.text.primary};
		transition: color 0.3s ease;
	}
`;

export const DrawerMenu = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

export const DrawerItem = styled(Link)`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.text.primary};
	text-decoration: none;
	transition: color 0.3s ease;

	&:hover {
		color: ${({ theme }) => theme.colors.primary.main};
	}
`;
