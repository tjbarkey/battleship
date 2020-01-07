import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {validateLocation,validateLocations, placeShip} from '../game_logic/player_methods.js'


describe('PLAYER METHODS', () => {
  describe('validateLocation', () => {
    let player;

    beforeEach( () => {
      player = {
        ships: [
          {
            locations: [[9, 9]]
          }
        ]
      };
    });

    it('shoud confirm valid for unoccupied locations in range', () =>{
      let location = [0, 0];
      let actual = validateLocation(player, location);

      expect(actual).to.be.ok;
    });

    it('shoud confirm INvalid for occupied locations in range', () =>{
      const location = [9, 9];
      const actual = validateLocation(player, location);

      expect(actual).to.be.false;
    });

    it('shoud confirm INvalid for UNoccupied locations OUT of range', () => {
      const locationHigh = [10, 10];
      const locationLow = [-1, -1];

      expect(validateLocation(player, locationHigh)).to.be.false;
      expect(validateLocation(player, locationLow)).to.be.false;
    });
  });

  describe('validateLocations', () => {

    let player;

    beforeEach( () => {
      player = {
        ships: [
          {
            locations: [[0, 0]]
          }
        ]
      };
    });

    it('should correctly report a list of unoccupied locations is valid',  () => {
      const locations = [[1, 1], [1, 2], [1, 3], [1, 4]];
      expect(validateLocations(player, locations)).to.be.ok;
    });

    it('should correctly report a a problem if any location in the list is invalid',  () => {
      let locations = [[1, 1], [1, 2], [1, 3], [10, 10]];
      expect(validateLocations(player, locations)).to.be.false;

      locations = [[1, 1], [1, 2], [1, 3], [0, 0]];
      expect(validateLocations(player, locations)).to.be.false;
    });
  });

  describe('placeShip', () => {

    let player;

    beforeEach( () => {
      player = {
        ships: [
          {
            size: 1,
            locations: []
          },
          {
            size: 2,
            locations: [[1, 0], [1, 1]]
          }
        ]
      };
    });

    it('should update a ship with a valid starting location', () => {
      let ship = player.ships[0];
      let coordinates = [0, 1];

      placeShip(player, ship, coordinates, 'horizontal');
      let actual = ship.locations;

      expect(actual).to.be.ok;
      expect(actual).to.have.length(1);
      expect(actual[0]).to.deep.equal([0, 1]);
    });

		it('should throw an error if no direction is specified',  () => {
      let ship = player.ships[0];
      let coordinates = [0, 1];

			const handler = () => { placeShip(player, ship, coordinates); };
			expect(handler).to.throw(Error);
			expect(handler).to.throw('You left out the direction! I need that for math!');
		});
  });
});
