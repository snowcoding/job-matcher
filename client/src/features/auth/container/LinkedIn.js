import React from "react";
const LinkedIn = props => {
	return (
		<button onClick={props.onclick} className="btn linkedin">
			{props.actionType} with LinkedIn
		</button>
	);
};

export default LinkedIn;
