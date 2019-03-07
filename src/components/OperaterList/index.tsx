import * as React from 'react';
import {
    GestureResponderEvent,
    Image,
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    View,
    ViewStyle
} from 'react-native';
import { styles } from './styles';

interface OperaterListItemProps {
    viewStyle?: StyleProp<ViewStyle>; // Item组件根节点样式
    label?: string | number | React.ReactElement<any> | React.ReactElement<any>[]; // 组件左侧文字或者组件
    icon?: any; // 左侧icon
    labelStyle?: StyleProp<TextStyle> | StyleProp<ViewStyle>; // 左侧label节点样式
    extendStyle?: StyleProp<TextStyle | ViewStyle>; // 扩展组件样式
    onPress?: (event: GestureResponderEvent) => void; // 点击Item调用方法
    separate?: number; // 分隔符高度 默认为0
    borderBottom?: number; // 下边框 默认为0.5
    showArror?: boolean; //是否显示右侧箭头
    activeOpacity?: number;
    disabled?: boolean;
    touchabled?: boolean;
    children: React.ReactElement<any> | React.ReactElement<any>[] | string | number | null;
}

interface OperaterListProps {
    style?: StyleProp<ViewStyle>;
}

class Item extends React.PureComponent<OperaterListItemProps> {
    renderChild = (props: OperaterListItemProps) => {
        const { children, ...otherProps } = props;
        return React.cloneElement(children as React.ReactElement, {
            ...otherProps
        });
    };

    render() {
        const {
            viewStyle,
            label,
            labelStyle,
            onPress,
            extendStyle,
            separate = 0,
            borderBottom = 0.5,
            showArror = true,
            icon,
            activeOpacity = 0.2,
            disabled = false,
            touchabled = true,
            children
        } = this.props;

        const viewContainer = (
            <View style={[styles.container, { marginBottom: separate }]}>
                <View
                    style={[
                        styles.style_list_item_container,
                        viewStyle,
                        borderBottom ? { borderBottomWidth: borderBottom } : null
                    ]}>
                    {label ? (
                        <View style={[styles.style_label_view_container]}>
                            {icon ? <Image source={icon} style={[styles.style_label_view_container_icon]} /> : null}
                            {typeof label === 'string' ? (
                                <Text style={[labelStyle ? labelStyle : styles.defaultLabelStyle]}>{label}</Text>
                            ) : (
                                <View style={[labelStyle]}>{label}</View>
                            )}
                        </View>
                    ) : null}
                    {!children || typeof children === 'string' || typeof children === 'number' ? (
                        <View style={[styles.styles_extend_component_container]}>
                            {children ? <Text style={[styles.styles_extend_text, extendStyle]}>{children}</Text> : null}
                            {showArror ? <Image style={[styles.arror_png]} source={require('./arror.png')} /> : null}
                        </View>
                    ) : (
                        <View
                            style={[
                                styles.style_open_view_container,
                                extendStyle,
                                !label ? styles.style_open_view_container_no_label : null
                            ]}>
                            {this.renderChild(this.props)}
                            {showArror ? <Image style={[styles.arror_png]} source={require('./arror.png')} /> : null}
                        </View>
                    )}
                </View>
            </View>
        );

        return touchabled ? (
            <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={activeOpacity}>
                {viewContainer}
            </TouchableOpacity>
        ) : (
            viewContainer
        );
    }
}

export default class OperaterList extends React.Component<OperaterListProps> {
    static Item = Item;
    render() {
        const { children, style } = this.props;
        return <View style={style}>{children}</View>;
    }
}
