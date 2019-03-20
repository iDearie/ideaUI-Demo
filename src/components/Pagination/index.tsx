import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from '../Button';
import { styles } from './style';
import { WithTheme } from '../Theme';

interface PaginationProps {
  current: number; //当前页号
  total: number; //数据总数
  simple: boolean; //是否隐藏数值
  disabled: boolean; //禁用状态
  locale: { prevText: string; nextText: string };
  onChange?: (e: { current: number }) => void;
}

class Pagination extends Component<PaginationProps> {
  static defaultProps: PaginationProps = {
    current: 2,
    total: 5,
    simple: false,
    disabled: false,
    locale: {
      prevText: '上一页',
      nextText: '下一页'
    }
  };

  state: {
    current: number;
  };

  constructor(props: PaginationProps) {
    super(props);
    const { current, total } = props;
    this.state = {
      current
    };
  }

  onPressPrev = () => {
    const { current } = this.state;
    const { onChange } = this.props;
    this.setState(() => {
      const _current = !(current - 1) ? current : current - 1;
      onChange && onChange({ current: _current });
      return {
        current: _current
      };
    });
  };

  onPressNext = () => {
    const { current } = this.state;
    const { total, onChange } = this.props;
    this.setState(() => {
      const _current = current === total ? current : current + 1;
      onChange && onChange({ current: _current });
      return {
        current: _current
      };
    });
  };

  render() {
    const { total, locale, simple, disabled } = this.props;
    const { current } = this.state;
    const { prevText, nextText } = locale;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <View style={[_style.container]}>
            <Button
              disabled={disabled || current === 1}
              onPress={this.onPressPrev}
              type={'ghost'}
              size={'small'}
              viewStyle={[_style.btn]}>
              {prevText}
            </Button>
            <View style={[_style.number]}>
              {!simple ? (
                <Text>
                  <Text style={[_style.current]}>{current}</Text> / {total}
                </Text>
              ) : null}
            </View>
            <Button
              onPress={this.onPressNext}
              disabled={disabled || current === total}
              type={'ghost'}
              size={'small'}
              viewStyle={[_style.btn]}>
              {nextText}
            </Button>
          </View>
        )}
      </WithTheme>
    );
  }
}

export default Pagination;
