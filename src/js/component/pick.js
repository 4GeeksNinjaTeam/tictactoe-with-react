import React from "react";
import { Button } from "bootstrap";

export const Pick = () => {
	return (
		<div className="container">
			<h1 className="text-center">Tic Tac Toe in React.js</h1>
			<h2 className="text-center">Pick a Weapon</h2>
			<div className="container m-auto">
				<div className="row d-flex justify-content-center">
					<h2>Choose your weapon</h2>
				</div>
				<div className="row">
					<form style={{ width: "100%" }}>
						<div className="form-row">
							<div className="form-group col-6">
								<input
									name="playerX"
									type="text"
									className="form-control"></input>
							</div>
							<div className="form-group col-6">
								<input
									name="playerO"
									type="text"
									className="form-control"></input>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-6 d-flex justify-content-center">
								<button
									className="btn btn-dark m-auto"
									style={{ width: "100px", height: "100px" }}>
									X
								</button>
							</div>
							<div className="form-group col-6 d-flex justify-content-center">
								<button
									className="btn btn-dark m-auto"
									style={{ width: "100px", height: "100px" }}>
									O
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
