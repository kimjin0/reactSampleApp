import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import AppSwitchA from './component/SwitchA';
import AppSwitchB from './component/SwitchB';
const App = () => {
  return (
    <>
      <SafeAreaView>
        <AppSwitchA />
        <AppSwitchB />
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   switchA: {
//     flex: 1,
//     height: '50%',
//     backgroundColor: '#3c4ef0',
//   },
//   switchB: {
//     flex: 1,
//     height: '50%',
//     backgroundColor: 'green',
//   },
// });

export default App;
