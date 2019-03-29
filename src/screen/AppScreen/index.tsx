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
import { StyleSheet, View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import Collapse from '../../components/Collapse';
import { Button } from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import List from '../../components/List';
import Pagination from '../../components/Pagination';
import { Slider } from '../../components/Slider';
import Tab from '../../components/Tab';
import { AppStore } from '../../store/AppStore';
import Switch from '../../components/Switch';
import { InputItem, PasswordInput } from '../../components/InputItem';
import Icon from '../../components/Icon';
import { styles } from './style';
import { Popover } from '../../components/Popover';
import { SliderWrap } from '../../components/Slider/SliderWrap';
import TimeLineList from '../../components/TimeLineList';
import TextAreaItem from '../../components/TextAreaItem';

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

  onChangeCollapse = (activeKeys: string[]) => {
    console.log('TCL: onChangeCollapse -> activeKeys', activeKeys);
  };

  render() {
    const { appStore } = this.props;
    console.log(`this.props`, this.props);
    return (
      <View style={styles.container}>
        <View style={{ width: '100%' }}>
          <Tab
            titleList={[
              { code: 'basic', name: '基础组件' },
              { code: 'input-data', name: '输入组件' },
              { code: 'data-display', name: '数据展示组件' }
            ]}>
            <Collapse onChange={this.onChangeCollapse}>
              <Collapse.Panel header={'Button'} value={'button'}>
                <Button type={'ghost'} onPress={this.navToMine} viewStyle={{ marginHorizontal: 15, marginVertical: 5 }}>
                  提交
                </Button>
                <Button viewStyle={{ marginHorizontal: 15, marginVertical: 5 }}>提交</Button>
              </Collapse.Panel>
              <Collapse.Panel header={'Icon'} value={'icon'}>
                <List.Item>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
                    <Icon name={'eye'} style={styles.icon} />
                    <Icon name={'close'} style={[styles.icon, { color: 'skyblue' }]} />
                    <Icon name={'star-o'} style={[styles.icon, { color: '#999' }]} />
                  </View>
                </List.Item>
              </Collapse.Panel>
            </Collapse>
            <Tab choice={'click'} titleList={[{ code: 'text', name: '文字输入' }, { code: 'click', name: '点击输入' }]}>
              <Collapse>
                <Collapse.Panel value={'input-item'} header={'单行输入'}>
                  <List.Item showArrow={false}>
                    <PasswordInput clear />
                  </List.Item>
                  <List.Item>
                    <InputItem />
                  </List.Item>
                </Collapse.Panel>
                <Collapse.Panel value={'textarea-item'} header={'多行输入'}>
                  <View style={{ padding: 10 }}>
                    <TextAreaItem rows={4} theme={'light'} />
                  </View>
                </Collapse.Panel>
              </Collapse>
              <Collapse>
                <Collapse.Panel value={'switch'} header={'开关组件'}>
                  <List>
                    <List.Item showArrow={false}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text>默认关：</Text>
                        <Switch />
                        <Text>默认开：</Text>
                        <Switch checked />
                      </View>
                    </List.Item>
                  </List>
                </Collapse.Panel>
                <Collapse.Panel value={'slider'} header={'滑动选择组件'}>
                  <Slider showLeft onChange={this.onChangeSlider} style={{ marginHorizontal: 10 }} />
                </Collapse.Panel>
                <Collapse.Panel value={'checkbox'} header={'单选&复选组件'}>
                  <List.Item showArrow={false}>
                    <Checkbox defaultValue={['1', '2']} type={'tag'} layout={'inline'}>
                      <Checkbox.Item value={'1'}>123</Checkbox.Item>
                      <Checkbox.Item value={'2'}>123</Checkbox.Item>
                    </Checkbox>
                  </List.Item>
                </Collapse.Panel>
              </Collapse>
            </Tab>
            <Collapse>
              <Collapse.Panel value={'pagination'} header={'分页组件'}>
                <List>
                  <List.Item activeOpacity={1} showArrow={false}>
                    <Pagination
                      current={1}
                      total={20}
                      locale={{ prevText: '上', nextText: '下' }}
                      onChange={this.onChangePagination}
                    />
                  </List.Item>
                  <List.Item activeOpacity={1} showArrow={false}>
                    <Pagination current={1} total={10} simple onChange={this.onChangePagination} />
                  </List.Item>
                  <List.Item activeOpacity={1} showArrow={false}>
                    <Pagination current={1} total={10} disabled onChange={this.onChangePagination} />
                  </List.Item>
                </List>
              </Collapse.Panel>
              <Collapse.Panel value={'popover'} header={'气泡组件'}>
                <View style={{ width: 100, height: 100, alignItems: 'center', justifyContent: 'center' }}>
                  <Popover message={'200000000'} isVisible={true}>
                    <Text>123</Text>
                  </Popover>
                </View>
              </Collapse.Panel>
              <Collapse.Panel value={'time-list'} header={'时间线组件'}>
                <TimeLineList header={'时间线'} style={{ marginHorizontal: 16 }}>
                  <TimeLineList.Item title={'2018-01-01'}>
                    <View>
                      <View style={{ height: 100 }} />
                    </View>
                  </TimeLineList.Item>
                  <TimeLineList.Item title={'2017-01-01'} />
                  <TimeLineList.Item>
                    <Text>2016-01-01</Text>
                  </TimeLineList.Item>
                  <TimeLineList.Item title={<Text>2015-01-01</Text>}>
                    <View style={{ height: 50, backgroundColor: 'orange' }} />
                  </TimeLineList.Item>
                </TimeLineList>
              </Collapse.Panel>
            </Collapse>
          </Tab>
        </View>
      </View>
    );
  }
}
