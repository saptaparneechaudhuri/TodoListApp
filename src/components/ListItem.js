import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = ({title, onDelete, onEdit, id}) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.textStyle}> {title} </Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onEdit(id)}>
          <Icon name="create" size={25} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)}>
          <Icon name="trash-outline" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginBottom: 20,
    margin: 10,
  },
  textStyle: {
    fontSize: 20,
    maxWidth: '80%',
  },
});

export default ListItem;
