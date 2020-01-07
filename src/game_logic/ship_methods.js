const checkForShip = (player, coordinates) => {
  for (let i = 0; i < player.ships.length; i++) {
    let ship = player.ships[i];
    let shipPresent = ship.locations.filter(actualCoordinates => {
      if (
        actualCoordinates[0] === parseInt(coordinates[0]) &&
        actualCoordinates[1] === parseInt(coordinates[1])
      ) {
        return ship;
      } else {
        return false;
      }
    })[0];

    if (shipPresent) {
      return ship;
    }
  }
  return false;
};

//function not needed with redux
//
// const damageShip = (ship, coordinates,damage)=>{
//     ship.damage.push(coordinates);
//
// }

const fire = (player, coordinates) => {
  const ship = checkForShip(player, coordinates);

  if (ship) {
    //damageShip(ship,coordinates)
    return coordinates;
  } else {
    return false;
  }
};

export { checkForShip, fire };
