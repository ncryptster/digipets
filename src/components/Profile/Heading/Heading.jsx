import React from 'react';

const Heading = (props) => {
	return (
		<div style={{ backgroundColor: props.bgcolor ,color: props.txcolor, height: "24px", textAlign: "left", paddingLeft: "5px", border: `1px solid ${props.bgcolor}`}}>
			{props.text}
		</div>
	);
}

export default Heading;
