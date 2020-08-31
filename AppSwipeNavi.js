import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ListData from './AppFlatList';
function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Settings')}
      />
      {/* <Button title="view DisplayInfo" onPress={this.DisplayInfo} /> */}
    </View>
  );
}
function DisplayInfo() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>DisplayInfo Screen</Text>
    </View>
  );
}

function Settingscreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
}
const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={Settingscreen} />
        <Tab.Screen name="List" component={ListData} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
// https://reactnavigation.org/docs/hello-react-navigation
