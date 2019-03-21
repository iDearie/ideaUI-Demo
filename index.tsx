/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
import { Provider } from 'mobx-react';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import App from './src/screen/AppScreen';
import MineScreen from './src/screen/MineScreen';
import store from './src/store';
import zhCN from './src/components/LocaleProvider/zh_CN';
import enUS from './src/components/LocaleProvider/en_US';
import LocaleProvider from './src/components/LocaleProvider';

class MainApp extends Component {
  fucChange = (WrappedComponent: any) => {
    return (
      <Provider {...store}>
        <LocaleProvider locale={zhCN}>
          <WrappedComponent {...this.props} />
        </LocaleProvider>
      </Provider>
    );
  };

  RNSimple() {
    return createAppContainer(
      createStackNavigator(
        {
          App: {
            screen: App
          },
          MineScreen: {
            screen: MineScreen
          }
        },
        {
          initialRouteName: 'App'
        }
      )
    );
  }

  render() {
    return this.fucChange(this.RNSimple());
  }
}

AppRegistry.registerComponent('ideaUI', () => MainApp);
