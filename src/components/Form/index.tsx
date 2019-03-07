import * as React from 'react';
import { Text, View, ViewStyle, TextStyle, StyleProp } from 'react-native';
import { createForm } from 'rc-form';
import { styles } from './styls';
import OperaterList from '../OperaterList';
const { Item: OperaterListItem } = OperaterList;

interface FormItemProps {
    viewStyle: StyleProp<ViewStyle>; // Item 根节点样式
    labelStyle: StyleProp<TextStyle>; // Item label节点样式
    extendStyle: StyleProp<ViewStyle>; // Item 扩展组件样式
    onPress: () => void; // Item 点击方法
    separate: number; // Item 分隔符
    borderBottom?: number; // Item 下边框
    label: string; // Item label文字
    error?: string[]; // Item 错误文案
    activeOpacity?: number;
    showArror?: boolean;
    disabled?: boolean;
    touchabled?: boolean;
    children: any;
}

interface FormProps {
    style: StyleProp<ViewStyle>; // 根节点样式
}

class FormItem extends React.PureComponent<FormItemProps> {
    getError = (error: any) => {
        if (error) {
            return error.map((info: any) => {
                return (
                    <Text style={styles.errorinfoText} key={info}>
                        {info}
                    </Text>
                );
            });
        }
        return null;
    };

    renderChild = (props: FormItemProps) => {
        const { children, extendStyle, ...otherProps } = props;
        const isString = typeof children === 'string';
        return (
            <View style={[styles.style_list_item_container, !isString ? extendStyle : null]}>
                {React.Children.map(
                    !isString ? (
                        children
                    ) : (
                        <Text numberOfLines={1} style={[styles.style_extend_text, extendStyle]}>
                            {children}
                        </Text>
                    ),
                    child => {
                        return React.cloneElement(child as React.ReactElement<any>, {
                            ...otherProps
                        });
                    }
                )}
            </View>
        );
    };
    render() {
        const {
            error,
            viewStyle,
            label,
            labelStyle,
            extendStyle,
            onPress,
            separate = 0,
            borderBottom = 0.5,
            activeOpacity,
            showArror,
            disabled = false,
            touchabled = true
        } = this.props;

        return (
            <OperaterList>
                <OperaterListItem
                    touchabled={touchabled}
                    disabled={disabled}
                    borderBottom={borderBottom}
                    separate={separate}
                    onPress={onPress}
                    label={label}
                    viewStyle={viewStyle}
                    labelStyle={labelStyle}
                    extendStyle={extendStyle}
                    activeOpacity={activeOpacity}
                    showArror={showArror}>
                    {this.renderChild(this.props)}
                </OperaterListItem>
            </OperaterList>
        );
    }
}

export default class Form extends React.Component<FormProps> {
    static FormItem = FormItem;
    static create = createForm;
    render() {
        const { children, style } = this.props;
        return <View style={style}>{children}</View>;
    }
}
