import React, {useState} from 'react';
import {Text, TextInput} from 'react-native';

export default () => {
  const [input, setInput] = useState('');
  return (
    <>
      <Text>{input}</Text>
      <TextInput
        placeholder="Digite algo"
        value={input}
        onChangeText={setInput}
      />
    </>
  );
};
