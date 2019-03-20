import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BaseProps } from '../base/Props';
import Icon from '../Icon';
import List from '../List';
import { WithTheme } from '../Theme';
import { styles } from './style';

interface PanelProps extends BaseProps {
  header: React.ReactElement | string;
  key: string;
}

class Panel extends Component<PanelProps> {
  triggerPanel = () => {};

  getChildLayout = ({ nativeEvent }: any) => {
    console.log('TCL: Panel -> getChildLayout -> layout', nativeEvent);
  };
  render() {
    const { children, header, activeKeys = [], key } = this.props;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <View>
            {header ? (
              <View style={[_style.header_container]}>
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
        )}
      </WithTheme>
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
