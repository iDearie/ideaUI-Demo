import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { BaseProps } from '../base/Props';
import { Button } from '../Button';
import { WithTheme } from '../Theme';
import { styles } from './style';
import { getComponentLocale } from '../_util/getLocale';
import zh_CN from './locale/zh_CN';

interface PaginationProps extends BaseProps {
  current: number; //当前页号
  total: number; //数据总数
  simple?: boolean; //是否隐藏数值
  disabled?: boolean; //禁用状态
  locale?: { prevText: string; nextText: string };
  onChange?: (e: { current: number }) => void;
}

interface PaginationState {
  current: number;
}

class Pagination extends Component<PaginationProps, PaginationState> {
  static defaultProps: Partial<PaginationProps> = {
    current: 2,
    total: 5,
    simple: false,
    disabled: false
  };

  static contextTypes = {
    contextLocale: PropTypes.object
  };

  constructor(props: PaginationProps) {
    super(props);
    this.state = {
      current: props.current
    };
  }

  componentWillReceiveProps(nextProps: PaginationProps) {
    const { current } = nextProps;
    this.setState({
      current
    });
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
    const { total, simple, disabled } = this.props;
    const { current } = this.state;
    const locale = getComponentLocale(this.props, (this as any).context, 'Pagination', () => zh_CN);
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
