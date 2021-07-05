import {atom} from 'recoil';

//  piece of state for todoList using recoil
const todoListAtom = atom({
  key: 'list',
  default: [],
});

export default todoListAtom;
