import styled from "styled-components";
import { Spin } from "antd";

export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background-color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CustomSpin = styled(Spin)`
	.ant-spin-dot-item {
		transform: scale(2);
		background-color: ${({ theme }) => theme.colors.primary.main};
	}

	.ant-spin-dot {
		font-size: 48px;
	}
`;
