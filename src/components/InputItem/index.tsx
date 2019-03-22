import React, { Component, ComponentClass } from 'react';
import { StyleProp, TextInput, TextInputProperties, TextStyle, View } from 'react-native';
import { Omit } from 'utility-types';
import Icon from '../Icon';
import { WithTheme } from '../Theme';
import { styles } from './style';

export type TextInputProps = Omit<TextInputProperties, 'onChange' | 'onFocus' | 'onBlur'>;
export type InputEventHandler = (value?: string) => void;

export interface InputItemProps extends TextInputProps {
  style?: StyleProp<TextStyle>;
  disabled?: boolean;
  visible?: boolean;
  visibleBtn?: boolean;
  clear?: boolean;
  onChange?: (value: string) => void;
}

export interface PasswordInputState {
  secureTextEntry: boolean;
}

export const PasswordInputHOC = (WrapperComponent: ComponentClass<InputItemProps>) => {
  return class extends Component<InputItemProps, PasswordInputState> {
    constructor(props: InputItemProps) {
      super(props);
      this.state = {
        secureTextEntry: true
      };
    }

    triggerVisibleBtn = () => {
      this.setState({
        secureTextEntry: !this.state.secureTextEntry
      });
    };

    render() {
      const { secureTextEntry } = this.state;
      return (
        <WithTheme themeStyles={styles}>
          {(_style) => (
            <View style={[_style.container]}>
              <WrapperComponent {...this.props} secureTextEntry={secureTextEntry} />
              <View>
                <Icon
                  name={!secureTextEntry ? 'eye' : 'eye-slash'}
                  style={[_style.password_visible_btn]}
                  onPress={this.triggerVisibleBtn}
                />
              </View>
            </View>
          )}
        </WithTheme>
      );
    }
  };
};

export class InputItem extends Component<InputItemProps> {
  inputItemRef: any;

  clear = () => {
    this.inputItemRef.clear();
  };

  render() {
    const { onChange, style, clear, ...resetProps } = this.props;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <View style={_style.container}>
            <TextInput
              ref={(ref) => (this.inputItemRef = ref)}
              underlineColorAndroid="transparent"
              style={[_style.input_container, style]}
              onChangeText={onChange}
              {...resetProps}
            />
            {clear ? <Icon name={'close'} style={_style.close_btn} onPress={this.clear} /> : null}
          </View>
        )}
      </WithTheme>
    );
  }
}

export const PasswordInput = PasswordInputHOC(InputItem);
