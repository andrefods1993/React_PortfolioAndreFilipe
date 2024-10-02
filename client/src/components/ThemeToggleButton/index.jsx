import { useContext, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { StyledFloatButton, IconWrapper } from "./styles";

const ThemeToggleButton = () => {
	const { toggleTheme } = useContext(ThemeContext);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
		toggleTheme();
		setIsDarkMode(!isDarkMode);
	};

	return (
		<StyledFloatButton
			icon={
				isDarkMode ? (
					<IconWrapper>
						<FaMoon />
					</IconWrapper>
				) : (
					<IconWrapper>
						<FaSun />
					</IconWrapper>
				)
			}
			onClick={handleToggle}
		/>
	);
};

export default ThemeToggleButton;
