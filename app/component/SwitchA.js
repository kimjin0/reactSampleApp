import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';
import {useObserver} from 'mobx-react';
import useStore from '~/stores/useStore';

const AppSwitch = () => {
  const {switchA} = useStore();

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  useObserver(() => {
    switchA.toggle(isEnabled);
  });

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={switchA.isLed ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={switchA.isLed}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    backgroundColor: '#FFFFFF',
  },
});

export default AppSwitch;
