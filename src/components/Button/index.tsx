import React, { ComponentType, Component } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle
} from 'react-native';
import { WithTheme } from '../Theme';
import buttonStyle from './styles';

interface ButtonProps {
  type?: 'default' | 'ghost'; // 按钮样式 默认: default 幽灵: ghost
  disabled?: boolean; // 按钮禁用状态 默认false
  disabledType?: 'neutral' | 'status'; // 按钮禁用样式 默认: neutral
  viewStyle?: StyleProp<ViewStyle>; // 按钮根节点样式
  textStyle?: StyleProp<TextStyle>; // 按钮文案样式
  bgColor?: 'base' | 'aux';
  size?: 'large' | 'default' | 'small'; // 按钮大小
  onPress?: (event: GestureResponderEvent) => void;
  children?: string;
}
const initialState = { pressIn: false };
type State = Readonly<typeof initialState>;
export class Button extends React.Component<ButtonProps, State> {
  static defaultProps: ButtonProps = {
    type: 'default',
    disabled: false,
    disabledType: 'neutral',
    bgColor: 'base',
    size: 'default'
  };

  readonly state: State = initialState;

  onPressIn = () => {
    this.setState({
      pressIn: true
    });
  };

  onPressOut = () => {
    this.setState({
      pressIn: false
    });
  };

  render() {
    const { children, type, disabled, disabledType, bgColor, size, viewStyle, textStyle, onPress } = this.props;
    const { pressIn } = this.state;
    return (
      <WithTheme themeStyles={buttonStyle}>
        {(styles) => {
          return (
            <TouchableWithoutFeedback
              onPressIn={this.onPressIn}
              onPress={onPress}
              onPressOut={this.onPressOut}
              disabled={disabled}>
              <View
                style={[
                  styles[`style_btn_${type}_container`],
                  styles[`style_btn_size_${size}`],
                  viewStyle,
                  pressIn ? styles[`style_btn_${type}_pressIn_container`] : null,
                  disabled ? styles[`style_btn_${type}_disabled_${disabledType}_container`] : null
                ]}>
                <Text
                  style={[
                    styles[`style_btn_${type}_text`],
                    styles[`style_btn_size_${size}_text`],
                    textStyle,
                    disabled ? styles[`style_btn_default_text`] : null
                  ]}>
                  {children}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        }}
      </WithTheme>
    );
  }
}
