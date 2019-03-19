import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';
import { styles } from './style';
import List from '../List';
import Icon from '../Icon';

interface PanelProps {
  header: React.ReactElement | string;
  key: string;
  activeKeys?: string[];
}

class Panel extends Component<PanelProps> {
  triggerPanel = () => {};

  getChildLayout = ({ nativeEvent }: any) => {
    console.log('TCL: Panel -> getChildLayout -> layout', nativeEvent);
  };
  render() {
    const { children, header, activeKeys = [], key } = this.props;
    console.log('TCL: render -> key', this);
    return (
      <View>
        {header ? (
          <View style={[styles.header_container]}>
            <List.Item
              showArrow={false}
              borderBottom={0}
              onPress={this.triggerPanel}
              label={React.isValidElement(header) ? header : <Text>{header}</Text>}>
              <Icon name={'chevron-down'} />
            </List.Item>
          </View>
        ) : null}
        <View>{children}</View>
      </View>
    );
  }
}

interface AccordionProps {
  activeKeys?: string[];
}

export default class Accordion extends Component<AccordionProps> {
  static Panel = Panel;
  render() {
    const { children, activeKeys } = this.props;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement, { activeKeys });
    });
  }
}
