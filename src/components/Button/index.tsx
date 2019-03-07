import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
    type?: 'default' | 'ghost'; // 按钮样式 默认: default 幽灵: ghost
    disabled?: boolean; // 按钮禁用状态 默认false
    disabledType?: 'neutral' | 'status'; // 按钮禁用样式 默认: neutral
    viewStyle?: StyleProp<ViewStyle>; // 按钮根节点样式
    textStyle?: StyleProp<TextStyle>; // 按钮文案样式
    bgColor?: 'base' | 'aux';
    size?: 'large' | 'default' | 'small'; // 按钮大小
    onPress?: (e: any) => void;
}

export class Button extends React.Component<ButtonProps> {
    state = {
        prassIn: false
    };

    onPressIn = () => {
        this.setState({
            prassIn: true
        });
    };

    onPressOut = () => {
        this.setState({
            prassIn: false
        });
    };

    render() {
        const {
            children,
            type = 'default',
            disabled = false,
            disabledType = 'neutral',
            bgColor = 'base',
            size = 'default',
            viewStyle,
            textStyle,
            onPress
        } = this.props;

        const { prassIn } = this.state;
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
                        prassIn ? styles[`style_btn_${type}_prassIn_container`] : null,
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
    }
}
