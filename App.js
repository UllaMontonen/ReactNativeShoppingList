import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  // adding things to shopping list
  const buttonAdd = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  // clearing the shopping list
  const buttonClear = () => {
    setText('');
    setData([]);
  }

  return (
    <View style={styles.container}>
      <TextInput 
          style={styles.input} 
          onChangeText={text => setText(text)} 
          value={text} />
      <View style={styles.operators}>
            <Button onPress={buttonAdd} title="ADD" />
            <Button onPress={buttonClear} title="CLEAR" />
      </View>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  input: {
    marginTop: 50,
    marginBottom: 10,
    padding: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
  operators: {
    flexDirection: 'row',
    marginTop: 10,
    
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    color: 'blue',
    marginBottom: 10,
  },
});