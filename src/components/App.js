import React from "react";
import "../styles/App.scss";
import { useSelector, useDispatch } from "react-redux";
import { takeTurn, checkGameStatus } from "../game_logic/game_instance";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const xvalue = useSelector(state => state.turn.x);
  const yvalue = useSelector(state => state.turn.y);
  const gameMessage = useSelector(state => state.turn.gameMessage);
  console.log(state);

  const handleXChange = event => {
    dispatch({ type: "UPDATECOORDINATEX", payload: event.target.value });
  };
  const handleYChange = event => {
    dispatch({ type: "UPDATECOORDINATEY", payload: event.target.value });
  };

  const handleClick = () => {
    const val = takeTurn(
      state.players[state.turn.activePlayer],
      [parseInt(xvalue), parseInt(yvalue)],
      state.game.boards[state.turn.activePlayer].damage
    );
    console.log(val);
    dispatch({
      type: "SHOT",
      payload: {
        coordinates: [parseInt(xvalue), parseInt(yvalue)],
        id: state.turn.activePlayer
      }
    });
    if (val.ship !== false) {
      dispatch({
        type: "DAMAGE",
        payload: { id: state.turn.activePlayer, coordinates: val.ship }
      });
    }
    let gameOver = checkGameStatus(
      state.players[state.turn.activePlayer],
      state.game.boards[state.turn.activePlayer].damage
    );
    dispatch({ type: "FIRE", payload: !gameOver ? "" : gameOver });
  };

  const moves = state.game.boards[state.turn.activePlayer];
  const shotlist = moves.locationsFired.map(coordinate => (
    <li>
      [{coordinate[0]},{coordinate[1]}]
    </li>
  ));
  const list = moves.damage.map(coordinate => (
    <li>
      [{coordinate[0]},{coordinate[1]}]
    </li>
  ));

  return (
    <div className="App">
      <h1>Battleship</h1>
      <h2>
        Player {state.turn.activePlayer === 0 ? 2 : 1}, pick your coordinates!
      </h2>
      <input value={xvalue} onChange={handleXChange} />
      <input value={yvalue} onChange={handleYChange} />
      <button onClick={handleClick}>Fire</button>
      <h2>{gameMessage}</h2>
      <h2>Damage</h2>
      <ul>{list}</ul>
      <h2>Shots Fired</h2>
      <ul>{shotlist}</ul>
    </div>
  );
};

export default App;
