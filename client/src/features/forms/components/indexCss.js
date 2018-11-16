import styled from "styled-components";

export const StyledInput = styled.input`
	display: block;
	margin: 10px 0;
	width: 100%;
	box-sizing: border-box;
	height: calc(2.25rem + 2rem);
	padding: 10px 7.5px;
	font-size: 14px;
	line-height: 1.5;
	color: #495057;
	background-color: #fff;
	background-clip: padding-box;
	border: 1px solid #ced4da;
	border-radius: 2.5px;
	overflow: visible;
	transition: border-color 0.15s ease-in-out, 0.15s ease-in-out;

	&:focus {
		color: #495057;
		background-color: #fff;
		border-color: #80bdff;
		outline: none;
		box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
	}
`;

export const FormDiv = styled.div`
	width: 100%;
	width: 500px;
	margin: auto;
	padding: 20px;
	border: 1px solid black;
`;
