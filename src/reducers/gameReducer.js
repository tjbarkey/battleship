const createSpaces = () => {
  const spaces = [];
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      spaces.push([x, y]);
    }
  }
  return spaces;
};

const initialState = {
  boards: [
    {
      id: 0,
      spaces: createSpaces(),
      locationsFired: [],
      damage: []
    },
    {
      id: 1,
      spaces: createSpaces(),
      locationsFired: [],
      damage: []
    }
  ]
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INITILIZE":
      return initialState;

    case "DAMAGE":
      let j = 0;
      for (let i = 0; i < state.boards[action.payload.id].damage.length; i++) {
        if (
          state.boards[action.payload.id].damage[i][0] ===
            action.payload.coordinates[0] &&
          state.boards[action.payload.id].damage[i][1] ===
            action.payload.coordinates[1]
        ) {
          console.log("here");
          j++;
        }
      }
      console.log(j);
      if (j === 0) {
        const newboards = [...state.boards];
        newboards[action.payload.id].damage.push(action.payload.coordinates);
        return Object.assign({}, state, {
          newboards
        });
      } else {
        j = 0;
        return state;
      }

    case "SHOT":
      const oopboards = [...state.boards];
      oopboards[action.payload.id].locationsFired.push(
        action.payload.coordinates
      );

      return Object.assign({}, state, {
        oopboards
      });

    default:
      return state;
  }
};

export default gameReducer;
