

const initialState = {
  activePlayer: 1,
  x:'',
  y:'',
  gameMessage:'',
};

const turnReducer = (state = initialState , action) =>{
  switch(action.type){
    case 'INITILIZE' : return initialState;
    case 'FIRE' : if(action.payload === '') {return Object.assign({}, state, {
      gameMessage:action.payload,
      activePlayer:(state.activePlayer===0)?1:0,
      x:'',
      y:''
    });}else{return Object.assign({}, state, {
      gameMessage:action.payload,
      x:'',
      y:''
    });}
    case 'UPDATECOORDINATEX' : return Object.assign({}, state, {
      x:action.payload
    });
    case 'UPDATECOORDINATEY' : return Object.assign({}, state, {
      y:action.payload
    });
    default : return state;
  }

}

export default turnReducer;
