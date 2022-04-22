import React, {Component} from 'react';
import {Text, TextInput} from 'react-native';

export default class Foo extends Component {
  state = {
    value: 'foo',
  };

  render() {
    return (
      <>
        <Text>{this.state.value}</Text>
        <TextInput
          placeholder="Digite algo"
          value={this.state.value}
          onChangeText={value => this.setState({value})}
        />
      </>
    );
  }
}
