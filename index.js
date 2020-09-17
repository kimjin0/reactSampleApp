/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './app/App';
// import App from './AppSwitch';
// import App from './app/component/Switch';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
