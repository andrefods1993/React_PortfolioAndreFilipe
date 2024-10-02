import { useEffect } from "react";
import {
	HeaderContainer,
	Row,
	ColImg,
	ColAction,
	Name,
	FirstName,
	LastName,
} from "./styles";
import PhotoCard from "../../../components/PhotoCard";
import PhotoImg from "../../../assets/images/photo-profile.jpg";
import Typewriter from "../../../components/Typewriter";
import AOS from "aos";

const HomeHeader = () => {
	const wordsArray = ["Startup.", "Marca.", "Equipe.", "Empresa.", "Ideia."];

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<HeaderContainer id="home">
			<Row>
				<ColImg>
					<div data-aos="fade-left">
						<PhotoCard
							image={PhotoImg}
							projectsValue={50}
							skillsValue={50}
						/>
					</div>
				</ColImg>
				<ColAction>
					<h2>Olá, Eu sou</h2>
					<Name>
						<FirstName>André</FirstName>
						<LastName>Filipe</LastName>
					</Name>
					<p>
						Um desenvolvedor Web dedicado a impulsionar sua{" "}
						<span>
							<Typewriter
								words={wordsArray}
								typingSpeed={200}
								delayBetweenWords={1000}
								eraseEffect="reverse"
							/>
						</span>
					</p>
				</ColAction>
			</Row>
		</HeaderContainer>
	);
};

export default HomeHeader;
