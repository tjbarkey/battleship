const createShips = () =>{
  const x1 = Math.floor(Math.random() * 10);
  const y1=Math.floor(Math.random() * 10);
  let x2 = Math.floor(Math.random() * 9);
  let y2 = Math.floor(Math.random() * 10);
  let x3 = Math.floor(Math.random() * 7);
  let y3 = Math.floor(Math.random() * 10);
  while(y1===y2){
    if(x1===x2 || x1 === x2+1){
      x2 = Math.floor(Math.random() * 9);
    }
    else{ break; }
  }
  while(y3===y2 || y3===y1){
    y3 = Math.floor(Math.random() * 10);
  }

  return ([
    {
    locations:[[x1,y1]],
    },
    {
    locations: [[x2,y2],[x2+1,y2]],
    },
    {
    locations: [[x3,y3],[x3+1,y3],[x3+2,y3],[x3+3,y3]],
    }
]);
}

const initialState = [{
  id: 0,
  ships: createShips(),
  active:true
},
{
  id: 1,
  ships: createShips(),
  active:false
}];





const playerReducer = (state = initialState , action) =>{
  switch(action.type){
    case 'INITILIZE' : return initialState;

    default : return state;
  }

}

export default playerReducer;
