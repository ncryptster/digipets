import React from 'react';
import './Digipets.css';
import Heading from '../Heading/Heading';
import Tomon from "../../Digipets/Tomon"
import Thremon from '../../Digipets/Thremon'
import Formon from '../../Digipets/Formon'


const Digipets = (props) => {
	const digimapping = { Formon, Thremon, Tomon }
	const digipets = props.user.digipets
	return (
		<div className="digipetContainer">
				<Heading bgcolor="blue" txcolor="white" text="Digipets" />	
				{digipets.map((componentName) => {
					const Component = digimapping[componentName]
					return <Component />
				})}
		</div>
	);
}

export default Digipets;
