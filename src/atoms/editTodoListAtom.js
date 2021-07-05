import {atom} from 'recoil';

//  piece of state to edit items in the todoList
const editTodoListAtom = atom({
  key: 'editList',
  default: '',
});

export default editTodoListAtom;
