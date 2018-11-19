import React from "react";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

const Education = ({ onChange, value }) => {
	return <DateRangePicker onChange={onChange} value={value} />;
};

export default Education;
