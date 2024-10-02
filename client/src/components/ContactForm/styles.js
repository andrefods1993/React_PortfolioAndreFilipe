import styled from "styled-components";
import { Button, Input, Form } from "antd";

export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: 0 2rem;
`;

export const ButtomCustom = styled(Button)`
	&&& {
		background-color: ${({ theme }) => theme.colors.primary.main};
		color: ${({ theme }) => theme.colors.primary.contrastText};
		transition: all 0.3s ease-in-out;

		&:hover {
			background-color: ${({ theme }) => theme.colors.primary.dark};
			color: ${({ theme }) => theme.colors.primary.contrastText};
		}
	}
`;

export const FormContent = styled(Form)`
	width: 100%;
`;

export const FormItem = styled(Form.Item)`
	.ant-form-item-label > label {
		color: ${({ theme }) => theme.colors.text.primary};
		font-weight: bold;
	}
`;

export const FormInput = styled(Input)`
	width: 100%;
	padding: 0.5rem;
`;

export const FormTextArea = styled(Input.TextArea)`
	width: 100%;
	padding: 0.5rem;
`;
