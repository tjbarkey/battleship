import React from 'react';
import { configure, shallow, render} from 'enzyme';
import chai, { expect } from 'chai';
import App from '../components/App';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


describe('SANITY TESTS',()=>{
  describe('Mocha', function () {
  //Test spec / unit test
  it('should run our tests using npm', function () {
    expect(true).to.be.ok;
  });
});


describe('APP TESTS',()=>{
    describe('Game Setup', ()=>{
      it('should create a game board')
      it('should create ships')
      it('should initialize locations of ships')
      it('should prompt user to place ships')
      it('should check that new ship ')

    });


});


  chai.use(chaiEnzyme())

})
