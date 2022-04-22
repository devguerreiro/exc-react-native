import React from 'react';
import {Text, FlatList} from 'react-native';

import {getItems} from '../services/items';

export default () => {
  const renderItem = ({item}) => <Text>{item.description}</Text>;
  const renderItems = () => {
    const items = getItems();
    return (
      <FlatList data={items} renderItem={renderItem} keyExtractor={i => i.id} />
    );
  };
  return <>{renderItems()}</>;
};
