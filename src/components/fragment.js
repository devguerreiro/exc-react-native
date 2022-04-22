import React from 'react';
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  component: {
    fontSize: 25,
  },
});

export default () => (
  // necessary to return more than one element
  // alternative for view

  // <React.Fragment>
  //   <Text style={styles.component}>Título</Text>
  //   <Text style={styles.component}>Subtítulo</Text>
  // </React.Fragment>

  // fragment shorthand
  <>
    <Text style={styles.component}>Título</Text>
    <Text style={styles.component}>Subtítulo</Text>
  </>
);
