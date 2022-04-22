import React from 'react';
import {Button} from 'react-native';

export default ({callback}) => {
  return <Button title="Emitir" onPress={callback} />;
};
