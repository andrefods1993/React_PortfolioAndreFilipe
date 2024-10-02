import { HomeContainer, HomeMain } from "./styles";
import HomeHeader from "../../layouts/home/Header";
import Welcome from "../../layouts/home/Welcome";
import About from "../../layouts/home/About";
import Skills from "../../layouts/home/Skills";
import Portfolio from "../../layouts/home/Portfolio";
import Consulting from "../../layouts/home/Consulting";
import Newsletter from "../../layouts/home/Newsletter";
import Contact from "../../layouts/home/Contact";

const Home = () => {
	return (
		<HomeContainer>
			<HomeHeader />
			<HomeMain>
				<Welcome />
				<About />
				<Skills />
				<Portfolio />
				<Consulting />
				<Newsletter />
				<Contact />
			</HomeMain>
		</HomeContainer>
	);
};

export default Home;
