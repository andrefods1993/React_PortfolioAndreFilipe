import styled from "styled-components";
import bgSkill from "../../../assets/images/bg-skills.jpg";

export const SkillsContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 4rem 2rem;
	width: 100%;
	background-image: ${({ theme }) => theme.colors.background.skills},
		url(${bgSkill});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;

export const SkillsContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	width: 80%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ColDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		align-items: flex-start;
		width: 50%;
	}
`;

export const ColSkills = styled.div`
	width: 100%;
	padding: 1rem;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 50%;
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
