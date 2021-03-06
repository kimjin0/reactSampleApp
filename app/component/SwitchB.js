import React, {useEffect, useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import useStore from '~/stores/useStore';
import {useObserver} from 'mobx-react';

const AppSwitch = () => {
  const {switchA} = useStore();

  useObserver(() => {
    console.log('SwitchB loading...', switchA.isLed);
  });

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={!switchA.isLed ? '#f4f3f4' : '#f5dd4b'}
        ios_backgroundColor="#3e3e3e"
        value={!switchA.isLed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    backgroundColor: '#B8E5F9',
  },
});

export default AppSwitch;
