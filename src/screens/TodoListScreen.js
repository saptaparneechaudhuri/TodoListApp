import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Keyboard, Alert} from 'react-native';
import Input from '../components/Input';
import ListItem from '../components/ListItem';
import todoListAtom from '../atoms/todoListAtom';
import {useRecoilState, useRecoilValue} from 'recoil';
import editTodoListAtom from '../atoms/editTodoListAtom';

const TodoListScreen = () => {
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useRecoilState(todoListAtom);
  const [editedItem, setEditedItem] = useRecoilState(editTodoListAtom);

  // console.log(todoList);

  const addTodoList = enteredItem => {
    Keyboard.dismiss();
    if (!enteredItem) {
      Alert.alert('Enter an item!');
      return;
    }
    setTodoList(currList => {
      if (editedItem) {
        return [...currList, {id: editedItem.id, value: editedItem.value}];
      } else {
        return [
          ...currList,
          {id: Math.random().toString(), value: enteredItem},
        ];
      }
    });
  };

  const onDelete = itemId => {
    setTodoList(itemList => {
      return itemList.filter(item => item.id !== itemId);
    });
  };
  const onEdit = itemId => {
    let editItem = todoList.find(item => {
      return item.id === itemId;
    });
    // console.log(editItem);
    setEditedItem(editItem);
    onDelete(itemId);
  };
  const renderItem = ({item}) => {
    return (
      <ListItem
        title={item.value}
        id={item.id}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}> Keep Your Notes</Text>
      </View>
      <Input addTodoList={addTodoList} />
      <FlatList
        data={todoList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  header: {
    backgroundColor: '#d90866',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomWidth: 5,
    // borderBottomColor: '#ddd',
    marginBottom: 10,
    elevation: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    padding: 26,
  },
  scrollView: {
    flex: 1,
    marginBottom: 100,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    margin: 5,
  },
});

export default TodoListScreen;
