import React, { Component } from 'react';
import { StyleProp, TextStyle, TouchableOpacity } from 'react-native';
import IconRoot from 'react-native-vector-icons/FontAwesome';
import { WithTheme } from '../Theme';
import { styles } from './styles';

interface IconProps {
  name: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export class Icon extends Component<IconProps> {
  render() {
    const { style, name, onPress } = this.props;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <TouchableOpacity
            onPress={onPress}
            style={onPress ? _style.touchable_view : null}
            activeOpacity={onPress ? 0.5 : 1}>
            <IconRoot style={[_style.style_default_icon, style]} name={name} />
          </TouchableOpacity>
        )}
      </WithTheme>
    );
  }
}
