import React from "react";
import { StyledInput, FormDiv } from "./indexCss";
// import StepZilla from "react-stepzilla";

const Forms = ({ text, state, inputHandler, is_seeker }) => {
	let arr = Object.entries(state);
	let inputs = arr.map((item, index) => (
		<StyledInput
			key={item[0]}
			type={item[1].type || "text"}
			name={item[0]}
			placeholder={item[0]}
			value={item[1].value}
			onChange={inputHandler}
		/>
	));
	return <FormDiv>{inputs}</FormDiv>;
};

export default Forms;
