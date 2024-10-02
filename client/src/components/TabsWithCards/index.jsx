import { useEffect } from "react";
import { Tabs } from "antd";
import { TabWrapper, CardContainer } from "./styles";
import OverlayCard from "../OverlayCard";
import portfolioData from "../../assets/data/portfolioData";
import AOS from "aos";

const TabsWithCards = () => {
	const allCards = [...portfolioData.programming, ...portfolioData.dashboard];

	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	return (
		<TabWrapper>
			<Tabs
				onChange={(key) => console.log("Tab selecionada:", key)}
				type="line"
				centered
				style={{
					marginBottom: "20px",
				}}
				items={[
					{
						label: "Todos",
						key: "1",
						children: (
							<CardContainer data-aos="zoom-in-up">
								{allCards.map((card, index) => (
									<OverlayCard
										key={index}
										image={card.image}
										title={card.title}
										description={card.description}
									/>
								))}
							</CardContainer>
						),
					},
					{
						label: "Programação",
						key: "2",
						children: (
							<CardContainer data-aos="zoom-in-up">
								{portfolioData.programming.map(
									(card, index) => (
										<OverlayCard
											key={index}
											image={card.image}
											title={card.title}
											description={card.description}
										/>
									)
								)}
							</CardContainer>
						),
					},
					{
						label: "Dashboard",
						key: "3",
						children: (
							<CardContainer data-aos="zoom-in-up">
								{portfolioData.dashboard.map((card, index) => (
									<OverlayCard
										key={index}
										image={card.image}
										title={card.title}
										description={card.description}
									/>
								))}
							</CardContainer>
						),
					},
				]}
			/>
		</TabWrapper>
	);
};

export default TabsWithCards;
