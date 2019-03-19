import React, { Component } from 'react';
import { StyleProp, TextStyle, TouchableOpacity, StyleSheet } from 'react-native';
import IconRoot from 'react-native-vector-icons/FontAwesome';
import { text_color_2 } from '../CustomTheme';

interface IconProps {
    name: string;
    style?: StyleProp<TextStyle>;
    onPress?: () => void;
}

const styles = StyleSheet.create({
    touchable_view: {
        minHeight: 20,
        minWidth: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Icon extends Component<IconProps> {
    render() {
        const { style, name, onPress } = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                style={onPress ? styles.touchable_view : null}
                activeOpacity={onPress ? 0.5 : 1}>
                <IconRoot style={[{ color: text_color_2, fontSize: 12 }, style]} name={name} />
            </TouchableOpacity>
        );
    }
}
