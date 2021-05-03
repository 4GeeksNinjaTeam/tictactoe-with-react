import React, { useState } from "react";
import { Pick } from "./pick";
import { Home } from "./home";

const select = () => {
	const [inicio, setInicio] = useState(false);

	// const cambiarAHome = () => {
	// 	setScreen(<Home />);
	// };

	return (
		<div>
			{!inicio ? <Pick /> : <Home />}

			<button
				onClick={() => {
					setInicio(true);
				}}>
				Iniciar
			</button>
		</div>
	);
};

export default select;
