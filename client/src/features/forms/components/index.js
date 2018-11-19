import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import {
	StyledInput,
	FormDiv,
	StyledLabel,
	FormGroup,
	Title
} from "./indexCss";
// import StepZilla from "react-stepzilla";

const Forms = ({ state, onChange, is_seeker, title }) => {
	let arr = Object.entries(state);
	let inputs = arr.map((item, index) =>
		item[0] !== "date" ? (
			<FormGroup key={item[1].id || item[0]}>
				<StyledInput
					type={item[1].type || "text"}
					name={item[1].name || item[0]}
					id={item[1].id || item[0]}
					placeholder={item[1].placeholder || item[0]}
					value={item[1].value}
					onChange={onChange}
				/>
				<StyledLabel htmlFor={item[1].id || item[0]}>
					{item[0]}
				</StyledLabel>
			</FormGroup>
		) : (
			<DateRangePicker
				key={item[1].id || item[0]}
				onChange={onChange}
				value={item[1].date}
			/>
		)
	);
	return (
		<FormDiv>
			<Title>{title}</Title>
			{inputs}
		</FormDiv>
	);
};

export default Forms;
