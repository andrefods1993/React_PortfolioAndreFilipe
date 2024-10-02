import styled from "styled-components";

export const TabWrapper = styled.div`
	padding: 20px;
    width: 100%;
	max-width: 1200px;
	margin: 0 auto;

	.ant-tabs-tab {
		color: ${({ theme }) => theme.colors.text.primary};
		font-size: 1rem;
		transition: color 0.3s ease;

		&:hover {
			color: ${({ theme }) => theme.colors.primary.light};
		}
	}

	.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
		color: ${({ theme }) => theme.colors.primary.dark};
		font-weight: bold;
	}

	.ant-tabs-ink-bar {
		background-color: ${({ theme }) => theme.colors.primary.dark};
	}

	.ant-tabs-nav::before {
		border-color: ${({ theme }) => theme.colors.background.paper};
`;

export const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 20px;
	justify-items: center;
`;
