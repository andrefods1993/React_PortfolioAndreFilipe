import styled, { keyframes } from "styled-components";

const rotateAndScaleBox = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.7);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const squareToCircle = keyframes`
  0% {
    border-radius: 10%;
    transform: translateY(0);
  }
  50% {
    border-radius: 50%;
    transform: translateY(20px);
  }
  100% {
    border-radius: 10%;
    transform: translateY(0);
  }
`;

export const CardContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 340px;
	height: 460px;
`;

export const CardContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

export const PhotoOne = styled.img`
	width: 270px;
	height: 400px;
	object-fit: cover;
	border-radius: 1rem;
	position: absolute;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 300px;
		height: 420px;
	}
`;

export const PhotoTwo = styled.img`
	width: 180px;
	height: 270px;
	object-fit: cover;
	border-radius: 1rem;
	position: absolute;
	top: 30px;
	right: 30px;

	@media (min-width: ${({ theme }) => theme.breakpoints.md}) {
		width: 200px;
		height: 280px;
	}
`;

export const BoxOne = styled.div`
	width: 80px;
	height: 80px;
	object-fit: cover;
	border-radius: 1rem;
	position: absolute;
	top: 230px;
	left: 0;
	background-color: ${({ theme }) => theme.colors.primary.light};
	animation: ${rotateAndScaleBox} 8s infinite ease-in-out;
`;

export const BoxTwo = styled.div`
	width: 50px;
	height: 50px;
	object-fit: cover;
	position: absolute;
	bottom: 100px;
	right: 170px;
	border: 8px solid ${({ theme }) => theme.colors.primary.light};
	animation: ${squareToCircle} 5s infinite ease-in-out;
`;
