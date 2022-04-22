import React from 'react';
import {StyleSheet, View} from 'react-native';
import ComponentWithProps from './src/components/props';
import ComponentWithFragment from './src/components/fragment';
import ComponentWithEvent from './src/components/events';
import ComponentWithState from './src/components/state';
import ComponentWithEmit from './src/components/emits';
import ComponentWithPlatform from './src/components/platform';
import ComponentWithSlot from './src/components/slots';
import ComponentIf from './src/components/if';
import ComponentWithList from './src/components/list';
import ComponentWithListAlternative from './src/components/listAlternative';

const styles = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default () => (
  <View style={styles.App}>
    <ComponentWithProps text="Olá Mundo!" />
    <ComponentWithFragment />
    <ComponentWithEvent />
    <ComponentWithState />
    <ComponentWithEmit
      callback={function () {
        console.warn('Oi filho!');
      }}
    />
    <ComponentWithPlatform />
    <ComponentWithSlot>
      <ComponentWithProps text="Olá Mundo! Filho 1" />
      <ComponentWithProps text="Olá Mundo! Filho 2" />
    </ComponentWithSlot>
    <ComponentIf condition={true}>
      <ComponentWithProps text="Olá Mundo! IF" />
    </ComponentIf>
    <ComponentWithList />
    <ComponentWithListAlternative />
  </View>
);
