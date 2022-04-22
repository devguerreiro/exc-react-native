import React from 'react';
import {Button} from 'react-native';

export default () => {
  const event = () => {
    console.warn('Alguma coisa!');
  };

  return <Button title="Clique me!" onPress={event} />;
};
