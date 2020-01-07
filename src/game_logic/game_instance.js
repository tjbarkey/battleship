import {fire} from './ship_methods.js';



	const checkGameStatus = (player, damage) => {
		const player1={locations:[]};
		player.ships.map(ship =>{
			player1.locations.push(...ship.locations);
		});

		if(player1.locations.length === damage.length){
			return "Game Over: You Win!";
		}
		else{ return false; }

}

const takeTurn = (opposingPlayer, guess, damageArray) => {
	let coordinates = guess;
	let ship = fire(opposingPlayer, coordinates);
	let gameOver = checkGameStatus(opposingPlayer,damageArray);
	return {gameMessage: gameOver, ship: ship};
}

export  {checkGameStatus,takeTurn};
