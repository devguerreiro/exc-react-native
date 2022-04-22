import React, {useState} from 'react';
import {Text, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  component: {
    fontSize: 50,
  },
});

export default () => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  return (
    <>
      <Text style={styles.component}>{counter}</Text>
      <Button title="Incremetar" onPress={increment} />
    </>
  );
};
