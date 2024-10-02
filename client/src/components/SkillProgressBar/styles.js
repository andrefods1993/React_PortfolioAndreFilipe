import styled from "styled-components";

export const ProgressWrapper = styled.div`
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;

	.ant-progress-inner {
		background-color: ${({ theme }) => theme.colors.background.paper};
	}

	.ant-progress-bg {
		background-color: ${({ theme }) => theme.colors.primary.main};
	}

	.ant-progress-text {
		color: ${({ theme }) => theme.colors.text.primary};
		font-weight: 700;
	}
`;

export const IconContainer = styled.div`
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.primary.main};
`;
