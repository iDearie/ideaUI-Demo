import * as React from 'react';
import { Image, StyleProp, Text, TextStyle, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { BaseProps } from '../base/Props';
import List from '../List';
import { WithTheme } from '../Theme';
import { CheckBoxStyles, styles } from './style';

export interface CheckboxProps {
  style?: StyleProp<ViewStyle>; // 根节点style
  type?: 'checkbox' | 'tag'; // checkbox 类型   checkbox: 正常  tag: 带边框
  layout?: 'list' | 'inline'; // 布局 list: 竖向布局   inline: 行内布局
  onChange?: (activeKey: number, checkedValue: number[]) => void; // 改变状态回调
  radio?: boolean; // 是否单选 默认false
  defaultValue?: number[] | string[]; // 默认值
  children: any;
}

export interface CheckboxItemProps extends BaseProps {
  textStyle?: StyleProp<TextStyle>; // Item: 文本节点样式
  viewStyle?: StyleProp<ViewStyle>; // Item 组件 根节点样式
  value: string; // Item 组件 value
  borderBottom?: number; // list 布局下的下边框
  numberOfLines?: number;
}

class Item extends React.Component<CheckboxItemProps> {
  onPress = () => {
    const { onChange, value } = this.props;
    onChange && onChange(value);
  };

  static defaultProps: CheckboxItemProps = {
    type: 'tag',
    checkedValues: [],
    layout: 'inline',
    value: '',
    borderBottom: 0.5,
    numberOfLines: 1
  };

  render() {
    const {
      textStyle,
      viewStyle,
      children,
      type,
      checkedValues = [],
      value,
      layout,
      borderBottom,
      numberOfLines
    } = this.props;
    const checked = checkedValues.includes(value);

    const ItemStyle: any = {
      inline_tag: (_style: CheckBoxStyles) => (
        <View
          style={[
            _style.style_checkbox_inline_tag_item_view,
            checked ? _style.style_checkbox_inline_tag_item_view_active : null,
            viewStyle
          ]}>
          <Text
            style={[
              _style.style_checkbox_inline_tag_item_text,
              checked ? _style.style_checkbox_inline_tag_item_text_active : null,
              textStyle
            ]}
            numberOfLines={numberOfLines}>
            {children}
          </Text>
        </View>
      ),
      inline_checkbox: (_style: CheckBoxStyles) => (
        <View style={[_style.style_checkbox_inline_checkbox_item_view, viewStyle]}>
          <Image
            style={[_style.style_checkbox_inline_checkbox_item_image]}
            source={checked ? require('./image/gender_clicked.png') : require('./image/gender_normal.png')}
          />

          <Text numberOfLines={numberOfLines} style={[_style.style_checkbox_inline_checkbox_item_text, textStyle]}>
            {children}
          </Text>
        </View>
      ),
      list_checkbox: () => (
        <List.Item
          borderBottom={borderBottom}
          label={<Text numberOfLines={numberOfLines}>{children}</Text>}
          showArrow={false}
          onPress={this.onPress}>
          {checked ? (
            <Image style={{ width: 14, height: 14 }} source={require('./image/item_check_auto_say_hi.png')} />
          ) : null}
        </List.Item>
      )
    };

    return (
      <WithTheme themeStyles={styles}>
        {(_style) => {
          const item = ItemStyle[`${layout}_${type}`];
          return (
            <TouchableWithoutFeedback key={value} onPress={this.onPress}>
              {(item && item(_style)) || null}
            </TouchableWithoutFeedback>
          );
        }}
      </WithTheme>
    );
  }
}

export default class Checkbox extends React.Component<CheckboxProps, any> {
  static Item = Item;

  constructor(props: CheckboxProps) {
    super(props);
    const { defaultValue } = props;
    this.state = {
      checkedValues: defaultValue || []
    };
  }

  componentWillReceiveProps(nextProps: CheckboxProps) {
    const { defaultValue } = nextProps;
    this.setState({
      checkedValues: defaultValue || []
    });
  }

  onChange = (activeKey: number) => {
    const { onChange, radio } = this.props;
    const { checkedValues } = this.state;
    const _checkedValues = !radio
      ? checkedValues.includes(activeKey)
        ? checkedValues.filter((v: any) => v !== activeKey)
        : [...checkedValues, activeKey]
      : [activeKey];
    onChange && onChange(activeKey, _checkedValues);
    this.setState({
      checkedValues: _checkedValues
    });
  };

  renderChild = (props: CheckboxProps) => {
    const { children, type, layout } = props;
    const { checkedValues } = this.state;
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        type,
        layout,
        onChange: this.onChange,
        checkedValues
      });
    });
  };

  renderWarp = ({ style, _style }: { style: StyleProp<ViewStyle>; _style: CheckBoxStyles }) => {
    return {
      list: <View style={[_style[`style_checkbox_list`], style]}>{this.renderChild(this.props)}</View>,
      inline: <View style={[_style[`style_checkbox_inline`], style]}>{this.renderChild(this.props)}</View>
    };
  };

  render() {
    const { style, layout = 'list' } = this.props;

    return (
      <WithTheme themeStyles={styles}>
        {(_style) => {
          return this.renderWarp({ style, _style })[layout];
        }}
      </WithTheme>
    );
  }
}
