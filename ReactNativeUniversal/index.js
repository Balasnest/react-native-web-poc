import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('ReactNativeUniversal', () => App);

if (window.document) {
    AppRegistry.runApplication("ReactNativeUniversal", {
        initialProps: {},
        rootTag: document.getElementById("react-root")
    });
}