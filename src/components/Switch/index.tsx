import React from 'react';
import { Animated, TouchableWithoutFeedback, View } from 'react-native';
import { WithTheme } from '../Theme';
import { styles } from './style';

interface SwitchProps {
  checked?: boolean; // 选中状态 默认false
  disabled?: boolean; // 禁用状态 默认false
  onChange?: (checked: boolean) => void; // 改变状态回调方法 参数为当前选中状态
}

export default class Switch extends React.Component<SwitchProps> {
  state: {
    translateX: Animated.Value;
    checked: boolean;
  };
  constructor(props: SwitchProps) {
    super(props);
    const { checked = false } = props;
    this.state = {
      translateX: new Animated.Value(checked ? 15.5 : 0),
      checked
    };
  }

  componentWillReceiveProps(nextProps: SwitchProps) {
    const { checked } = nextProps;
    this.setState({
      translateX: new Animated.Value(checked ? 15.5 : 0),
      checked
    });
  }

  onPress = () => {
    const checked = !this.state.checked;
    const { onChange } = this.props;
    Animated.timing(this.state.translateX, {
      toValue: checked ? 15.5 : 0,
      duration: 50
    }).start();
    onChange && onChange(checked);
    this.setState({
      checked
    });
  };

  render() {
    const { translateX, checked } = this.state;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View
              style={[
                _style.style_switch_container,
                checked ? _style.style_switch_container_checked : _style.style_switch_container_unchecked
              ]}>
              <Animated.View style={[_style.style_switch_warp, { transform: [{ translateX: translateX }] }]} />
            </View>
          </TouchableWithoutFeedback>
        )}
      </WithTheme>
    );
  }
}
