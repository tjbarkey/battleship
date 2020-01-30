## Project Overview

![Image of drum machine app](/public/screenshot.png)

![Image of drum machine app tests passing](/public/tests.png)

### `Intro`

I created a simple battleship game with a crude UI as a quickbuild project to practice writing test code and using redux. In this iteration, the game automatically assigns random ship locations upon initialization. 2 users input coordinates to fire missiles at each other's ships, and the game logic determines if it was a hit or miss, and whether that player has won by sinking all of their opponent's ships. The previous shots fired and the ship hits are listed on screen below an input box.

In future iterations, the game logic can be expanded to include making sure the shot is fired within the game board and is not a duplicate shot...this doesn't affect gameplay or the win outcome, but can make the game a lot longer to play. A graphic user interface and allowing players to place ships can also be added.

### `Technologies Used`

- Single Page CreateReactApp App
- React with Hooks
- ES6
- Netlify (front end hosting)
- Redux with Hooks
- Testable code with Mocha and Chai
- Object oriented programming
