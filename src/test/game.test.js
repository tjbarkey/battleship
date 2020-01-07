import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {checkGameStatus, takeTurn} from '../game_logic/game_instance.js';


describe('GAME INSTANCE FUNCTIONS', () => {
  describe('checkGameStatus', () => {
    it('should tell me when the game is over and who won', () => {
      const player =
        {
					ships: [
						{
							locations: [[0, 0]]

						},
            {
							locations: [[1,2],[1,3],[1,4],[1,5]]
						}
					]
        };
        const damage=[[0, 0],[1,2],[1,3],[1,4],[1,5]];



      let actual = checkGameStatus(player,damage);
      expect(actual).to.equal('Game Over: You Win!');
    });
  });

	describe('takeTurn', () => {

		let damage, guess, player;

		beforeEach( () => {
      damage= [];
			guess =  [0, 1];
			player = {
				ships: [
					{
						locations: [[0, 0]],
					}
				]
			};
		});

		it('should return false if no winner', () => {
			let actual = takeTurn(player, guess, damage);
			expect(actual.gameMessage).to.be.false;
		});
	});


});
