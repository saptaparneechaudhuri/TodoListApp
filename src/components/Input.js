import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';

import {useRecoilValue, useSetRecoilState} from 'recoil';
import editTodoListAtom from '../atoms/editTodoListAtom';

const GoalsInput = props => {
  const [value, setValue] = useState('');
  // Read the contents of the editTodoListAtom
  const editedItem = useRecoilValue(editTodoListAtom);
  // console.log(editedItem.id);
  const setEditedItem = useSetRecoilState(editTodoListAtom);
  const onAddHandler = () => {
    // adds the new list to the todoList array
    props.addTodoList(value);
    // Resets the input to empty string
    setValue('');
    // Resets the edited item to empty
    setEditedItem('');
  };

  let valueSet = '';
  if (editedItem) {
    valueSet = editedItem.value;
  } else {
    valueSet = value;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter Goal"
        placeholderTextColor="grey"
        value={valueSet}
        onChangeText={text => {
          // set the item to be edited to the new value
          if (editedItem) {
            setEditedItem({id: editedItem.id, value: text});
            setValue(editedItem.value);
          } else {
            setValue(text);
          }
        }}
      />
      <TouchableOpacity onPress={onAddHandler}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: '83%',
    fontSize: 18,
    color: 'black',
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    fontSize: 25,
  },
});

export default GoalsInput;
