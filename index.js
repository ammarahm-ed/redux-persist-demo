import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {StorageProvider} from './redux/storage';

AppRegistry.registerComponent(appName, () => StorageProvider);
