import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  component: {
    fontSize: 25,
  },
});

// props = {text: "foo"}
export default ({text}) => <Text style={styles.component}>{text}</Text>;
