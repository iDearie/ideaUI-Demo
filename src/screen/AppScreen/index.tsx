/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
import { inject } from 'mobx-react';
import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Accordion from '../../components/Accordion';
import { Button } from '../../components/Button';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { Slider } from '../../components/Slider';
import Tab from '../../components/Tab';
import { AppStore } from '../../store/AppStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

interface Props {
  navigation: NavigationScreenProp<null>;
  appStore: AppStore;
}

@inject('appStore')
export default class App extends Component<Props> {
  navToMine = () => {
    const { navigation } = this.props;
    navigation.navigate('MineScreen');
  };

  onChangeSlider = ({ start, end }: { start: number; end: number }) => {
    console.log('TCL: App -> onChangeSlider -> end', end);
    console.log('TCL: App -> onChangeSlider -> start', start);
  };

  onChangePagination = (e: { current: number }) => {
    const { current } = e;
    console.log(`current`, current);
  };

  render() {
    const { appStore } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Tab titleList={[{ code: '1', name: 'title-1' }, { code: '2', name: 'title-2' }]}>
            <View>
              <Accordion activeKeys={['list', 'button']}>
                <Accordion.Panel header={'List'} key={'list'}>
                  <List>
                    <List.Item label={'姓名'}>{`appStore - ${appStore.app}`}</List.Item>
                    <List.Item label={'姓名'}>{`appStore - ${appStore.app}`}</List.Item>
                    <List.Item label={'姓名'}>{`appStore - ${appStore.app}`}</List.Item>
                  </List>
                </Accordion.Panel>
                <Accordion.Panel header={'Button'} key={'button'}>
                  <Button
                    type={'ghost'}
                    onPress={this.navToMine}
                    viewStyle={{ marginHorizontal: 15, marginVertical: 5 }}>
                    提交
                  </Button>
                </Accordion.Panel>
              </Accordion>
            </View>
            <View style={{ marginHorizontal: 20 }}>
              <Slider showLeft onChange={this.onChangeSlider} />
              <List>
                <List.Item activeOpacity={1} showArrow={false}>
                  <Pagination current={1} total={20} onChange={this.onChangePagination} />
                </List.Item>
                <List.Item activeOpacity={1} showArrow={false}>
                  <Pagination current={1} total={10} simple onChange={this.onChangePagination} />
                </List.Item>
                <List.Item activeOpacity={1} showArrow={false}>
                  <Pagination current={1} total={10} disabled onChange={this.onChangePagination} />
                </List.Item>
              </List>
            </View>
          </Tab>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'visible'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
