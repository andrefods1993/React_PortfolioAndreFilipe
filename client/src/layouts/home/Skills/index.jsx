import { useEffect } from "react";
import {
	SkillsContainer,
	SkillsContent,
	ColDescription,
	ColSkills,
	Title,
	SubTitle,
	Description,
} from "./styles";
import SkillsProgressBar from "../../../components/SkillProgressBar";
import { Flex } from "antd";
import {
	DiReact,
	DiHtml5,
	DiCss3,
	DiAngularSimple,
	DiNodejsSmall,
	DiJsBadge,
	DiGithubBadge,
} from "react-icons/di";
import AOS from "aos";

const Skills = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
		});
	}, []);

	const skills = [
		{ icon: <DiHtml5 />, value: 91 },
		{ icon: <DiCss3 />, value: 95 },
		{ icon: <DiJsBadge />, value: 87 },
		{ icon: <DiReact />, value: 80 },
		{ icon: <DiAngularSimple />, value: 85 },
		{ icon: <DiNodejsSmall />, value: 76 },
		{ icon: <DiGithubBadge />, value: 95 },
	];

	return (
		<SkillsContainer>
			<SkillsContent data-aos="fade-up">
				<ColDescription>
					<SubTitle>Meus Skills</SubTitle>
					<Title>Como posso ajudar seu próximo projeto?</Title>
					<Description>
						Se você está procurando alguém para contribuir com seu
						projeto, aqui estão algumas maneiras pelas quais posso
						ser útil:
					</Description>
				</ColDescription>
				<ColSkills>
					<Flex gap="small" vertical>
						{skills.map((skill, index) => (
							<SkillsProgressBar
								key={index}
								icon={skill.icon}
								value={skill.value}
							/>
						))}
					</Flex>
				</ColSkills>
			</SkillsContent>
		</SkillsContainer>
	);
};

export default Skills;
