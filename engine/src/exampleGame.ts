import { IGameInit } from './interfaces';

const exampleGame: IGameInit = {
  name: 'Example game',
  objects: [
    {
      name: 'First game object',
      state: {
        age: 0,
      },
      start({ io }) {
        io.render(`hello, my name is ${this.name}`);
      },
      update({ state, io }) {
        io.render(`I am ${this.state.age} years old`);
        state.name = `Game: ${this.state.age}`;
        this.state.age += 1;
      },
    },
    {
      name: 'Second game object',
      state: {
        age: 10,
      },
      start({ io }) {
        io.render(`hello, my name is ${this.name}`);
      },
      update({ io, state }) {
        io.render(`I am ${this.state.age} years old`);
        state.name = `Game: ${this.state.age}`;
        this.state.age += 1;
      },
    },
  ],
};

export default exampleGame;
