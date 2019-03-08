import React, { Component } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import IconRoot from 'react-native-vector-icons/FontAwesome';
import { text_color_2 } from '../CustomTheme';

interface IconProps {
    name: string;
    style?: StyleProp<TextStyle>;
}

export default class Icon extends Component<IconProps> {
    render() {
        const { style, name } = this.props;
        return <IconRoot style={[{ color: text_color_2, fontSize: 12 }, style]} name={name} />;
    }
}
