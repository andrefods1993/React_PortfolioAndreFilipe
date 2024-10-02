import { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import {
	NavContainer,
	NavLogo,
	NavMenu,
	NavItem,
	ToggleButton,
	StyledDrawer,
	DrawerMenu,
	DrawerItem,
} from "./styles";
import { FaFire } from "react-icons/fa";

const menu = [
	{ label: "Home", path: "home" },
	{ label: "Sobre Mim", path: "about" },
	{ label: "Portfólio", path: "portfolio" },
	{ label: "Consultorias", path: "consulting" },
	{ label: "Contato", path: "contact" },
];

const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawer = () => {
		setIsDrawerOpen(!isDrawerOpen);
	};

	const handleScrollToSection = (sectionId) => {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<NavContainer>
			<NavLogo>
				<span className="icon">
					<FaFire />
				</span>
				André<span>Filipe</span>
			</NavLogo>
			<NavMenu>
				{menu.map((item) => (
					<NavItem
						key={item.path}
						onClick={() => handleScrollToSection(item.path)}
					>
						{item.label}
					</NavItem>
				))}
			</NavMenu>

			<ToggleButton onClick={toggleDrawer}>
				{isDrawerOpen ? <CloseOutlined /> : <MenuOutlined />}
			</ToggleButton>

			<StyledDrawer
				placement="right"
				closable={false}
				onClose={toggleDrawer}
				open={isDrawerOpen}
			>
				<DrawerMenu>
					{menu.map((item) => (
						<DrawerItem
							key={item.path}
							onClick={() => handleScrollToSection(item.path)}
						>
							{item.label}
						</DrawerItem>
					))}
				</DrawerMenu>
			</StyledDrawer>
		</NavContainer>
	);
};

export default Navbar;
