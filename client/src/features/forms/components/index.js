import React from "react";
import { StyledInput, FormDiv } from "./indexCss";
const Forms = ({ text, state, inputHandler }) => {
	let arr = Object.entries(state);
	let inputs = arr.map((item, index) => (
		<StyledInput
			key={item[0]}
			type="text"
			name={item[0]}
			placeholder={item[0]}
			value={item[1]}
			onChange={inputHandler}
		/>
	));
	return (
		<FormDiv>
			{text} <br /> {inputs}
		</FormDiv>
	);
};

export default Forms;
