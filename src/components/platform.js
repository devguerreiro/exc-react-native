import React from 'react';
import {Text, Platform} from 'react-native';

export default () => {
  return <Text>{Platform.OS}</Text>;
};
