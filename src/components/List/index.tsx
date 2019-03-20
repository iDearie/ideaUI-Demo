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
import { styles, ListItemStyles } from './styles';
import { WithTheme } from '../Theme';

export interface ListItemProps {
  viewStyle?: StyleProp<ViewStyle>; // Item组件根节点样式
  label?: string | number | React.ReactElement<any> | React.ReactElement<any>[]; // 组件左侧文字或者组件
  icon?: any; // 左侧icon
  labelStyle?: StyleProp<TextStyle> | StyleProp<ViewStyle>; // 左侧label节点样式
  extendStyle?: StyleProp<TextStyle | ViewStyle>; // 扩展组件样式
  onPress?: (event: GestureResponderEvent) => void; // 点击Item调用方法
  separate?: number; // 分隔符高度 默认为0
  borderBottom?: number; // 下边框 默认为0.5
  showArrow?: boolean; //是否显示右侧箭头
  activeOpacity?: number;
  disabled?: boolean;
  touchable?: boolean;
  children: React.ReactElement<any> | React.ReactElement<any>[] | string | number | null;
}

export interface ListProps {
  style?: StyleProp<ViewStyle>;
}

class Item extends React.PureComponent<ListItemProps> {
  renderChild = (props: ListItemProps) => {
    const { children, ...otherProps } = props;
    return React.cloneElement(children as React.ReactElement, {
      ...otherProps
    });
  };

  static defaultProps = {
    separate: 0,
    borderBottom: 0.5,
    activeOpacity: 0.2,
    showArrow: true,
    disabled: false,
    touchable: true
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
      showArrow = true,
      icon,
      activeOpacity = 0.2,
      disabled = false,
      touchable = true,
      children
    } = this.props;

    const renderContainer = (_style: ListItemStyles) => (
      <View style={[_style.container, { marginBottom: separate }]}>
        <View
          style={[
            _style.style_list_item_container,
            viewStyle,
            borderBottom ? { borderBottomWidth: borderBottom } : null
          ]}>
          {label ? (
            <View style={[_style.style_label_view_container]}>
              {icon ? <Image source={icon} style={[_style.style_label_view_container_icon]} /> : null}
              {typeof label === 'string' ? (
                <Text style={[labelStyle ? labelStyle : _style.defaultLabelStyle]}>{label}</Text>
              ) : (
                <View style={[labelStyle]}>{label}</View>
              )}
            </View>
          ) : null}
          {!children || typeof children === 'string' || typeof children === 'number' ? (
            <View style={[_style.styles_extend_component_container]}>
              {children ? <Text style={[_style.styles_extend_text, extendStyle]}>{children}</Text> : null}
              {showArrow ? <Image style={[_style.arrow_png]} source={require('./arrow.png')} /> : null}
            </View>
          ) : (
            <View
              style={[
                _style.style_open_view_container,
                extendStyle,
                !label ? _style.style_open_view_container_no_label : null
              ]}>
              {this.renderChild(this.props)}
              {showArrow ? <Image style={[_style.arrow_png]} source={require('./arrow.png')} /> : null}
            </View>
          )}
        </View>
      </View>
    );

    return (
      <WithTheme themeStyles={styles}>
        {(_style) =>
          touchable ? (
            <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={!onPress ? 1 : activeOpacity}>
              {renderContainer(_style)}
            </TouchableOpacity>
          ) : (
            renderContainer(_style)
          )
        }
      </WithTheme>
    );
  }
}

export default class List extends React.Component<ListProps> {
  static Item = Item;
  render() {
    const { children, style } = this.props;
    return <View style={style}>{children}</View>;
  }
}
