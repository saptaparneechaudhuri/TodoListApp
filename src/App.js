import React from 'react';
import {View, Text} from 'react-native';
import TodoListScreen from './screens/TodoListScreen';
import {RecoilRoot} from 'recoil';

// const App = () => {
//   return (
//     <RecoilRoot>
//       <TodoListScreen />
//     </RecoilRoot>
//   );
// };

const App = () => {
  return <TodoListScreen />;
};

export default () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};

// export default App;
