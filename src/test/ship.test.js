import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {checkForShip,damageShip,fire} from '../game_logic/ship_methods';

describe('SHIP METHODS', () => {
let player,damage;

before( ()=> {
  player={
    ships: [
      {
      locations:[[0,0],[0,1]]
    },
    {
      locations:[[1,0],[1,1]]
    },
    {
      locations:[[2,0],[2,1],[2,2],[2,3]]
    }
  ]
  };
});

describe('checkForShip', ()=>{
    it('should correctly report ship at a given players coordinate', ()=>{

      expect(checkForShip(player,[0,0])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player,[0,1])).to.deep.equal(player.ships[0]);
      expect(checkForShip(player,[1,0])).to.deep.equal(player.ships[1]);
      expect(checkForShip(player,[2,3])).to.deep.equal(player.ships[2]);
      expect(checkForShip(player,[9,9])).to.be.false;
    });
});


// describe('damageShip', ()=>{
//   it('should register damage on a given ship at a given location', ()=>{
//     const ship={
//         locations:[[0,0]],
//       };
//       const damage =[];
//
//     damageShip(ship,[0,0]);
//
//     expect(damage).to.not.be.empty;
//     expect(damage[0]).to.deep.equal([0,0]);
//   });
// });

describe('fire', ()=>{

  beforeEach(()=>{
    damage =[];
    player = {
    ships:[
      {
        locations:[[0,0]],
      }
    ]
  };
});

after( ()=> {
  console.log('entire test suite complete');
});

afterEach( () => {
  console.log('one test completed');
}

);


  it('should record damage on the given players ship at the given coordinates',()=>{
    let actual = fire(player,[0,0]);
    expect(actual).to.deep.equal([0,0]);
  });
  it('should record damage on the given players ship at the given coordinates',()=>{
    let actual = fire(player,[0,2]);
    expect(actual).to.be.false;
  });

  
});

});
