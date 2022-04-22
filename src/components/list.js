import React from 'react';
import {Text} from 'react-native';

import {getItems} from '../services/items';

export default () => {
  const renderItems = () => {
    const items = getItems();
    return items.map(item => <Text key={item.id}>{item.description}</Text>);
  };
  return <>{renderItems()}</>;
};
