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
		&::-webkit-input-placeholder {
			transform: translateY(-200%);
			opacity: 0;
			transition: all 0.3s;
		}
		& ~ .form-label {
			top: -10px;
			color: #333333dc;
		}
	}
	&:-webkit-input-placeholder,
	&::-webkit-input-placeholder {
		transform: translateY(0);
		font-size: 12px;
		transition: all 0.3s;
	}
`;

export const FormDiv = styled.div`
	width: 500px;
	min-height: 60vh;
	margin: 60px auto;
	font-size: 12px;
	padding: 50px;
	border: 1px solid #80808047;
	background-color: #ffffff;
	z-index: 2000;
`;
export const Title = styled.h1`
	font-size: 20px;
`;
export const FormGroup = styled.div`
	width: 100%;
	padding: 10px 0;
	position: relative;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 63px;
	text-align: start;
`;
export const StyledLabel = styled.label`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	top: 0;
	color: transparent;
	color: #495057;
	transition: all 0.4s;
`;

// justify-content: space-between;
//     margin-top: 0;
//     margin-bottom: 1rem;
//     display: flex;
//     width: 100%;
