import React, { useState, useEffect } from "react";

//create your first component
export function Home() {
	//evento tablero
	let [game, setGame] = useState(["", "", "", "", "", "", "", "", ""]); //estos espacios
	const button = () => setGame(["", "", "", "", "", "", "", "", ""]);

	//evento turno
	const [turnoActual, setTurnoActual] = useState("It's X turn");
	const cambiarTurno = () => {
		if (turnoActual == "It's X turn") {
			setTurnoActual("It's O turn");
		} else if (turnoActual == "It's O turn") {
			setTurnoActual("It's X turn");
		}
	};
	//funcion resultados

	let resultado = () => {
		let r1 = [game[0], game[1], game[2]];
		let flagX = false;
		let flagO = false;
		for (let i = 0; i < r1.length; i++) {
			if (r1[i] == "X") flagX = true;
			else flagX = false;
			if (r1[i] == "O") flagO = true;
			else flagO = false;
		}
		if (flagO) setTurnoActual("O won the game");
		if (flagX) setTurnoActual("X won the game");
	};

	useEffect(resultado, [game]);
	const verificarTurno = e => {
		let indice = 0;
		if (e.target.id == "casilla0") {
			indice = 0;
		}
		if (e.target.id == "casilla1") {
			indice = 1;
		}
		if (e.target.id == "casilla2") {
			indice = 2;
		}
		if (e.target.id == "casilla3") {
			indice = 3;
		}
		if (e.target.id == "casilla4") {
			indice = 4;
		}
		if (e.target.id == "casilla5") {
			indice = 5;
		}
		if (e.target.id == "casilla6") {
			indice = 6;
		}
		if (e.target.id == "casilla7") {
			indice = 7;
		}
		if (e.target.id == "casilla8") {
			indice = 8;
		}

		//console.log(e.target.id);
		if (game[indice] == "") {
			if (turnoActual == "It's X turn") {
				let copia = [...game];
				copia[indice] = "X";
				setGame(copia);
			} else if (turnoActual == "It's O turn") {
				let copia = [...game];
				copia[indice] = "O";
				setGame(copia);
			}
		}

		cambiarTurno();
	};

	return (
		<div className="container">
			<h1 className="text-center">Tic Tac Toe in React.js</h1>
			<h2 className="text-center">{turnoActual}</h2>
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary m-auto" onClick={button}>
					Start Over
				</button>
			</div>
			<div className="game-board mt-3">
				<div className="box" id="casilla0" onClick={verificarTurno}>
					{game[0]}
				</div>
				<div className="box" id="casilla1" onClick={verificarTurno}>
					{game[1]}
				</div>
				<div className="box" id="casilla2" onClick={verificarTurno}>
					{game[2]}
				</div>
				<div className="box" id="casilla3" onClick={verificarTurno}>
					{game[3]}
				</div>
				<div className="box" id="casilla4" onClick={verificarTurno}>
					{game[4]}
				</div>
				<div className="box" id="casilla5" onClick={verificarTurno}>
					{game[5]}
				</div>
				<div className="box" id="casilla6" onClick={verificarTurno}>
					{game[6]}
				</div>
				<div className="box" id="casilla7" onClick={verificarTurno}>
					{game[7]}
				</div>
				<div className="box" id="casilla8" onClick={verificarTurno}>
					{game[8]}
				</div>
			</div>
		</div>
	);
}
