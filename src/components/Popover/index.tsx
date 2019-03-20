import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import ViewOverflow from '../overflow';
import { styles, PopoverStyles } from './style';
import { WithTheme } from '../Theme';
import { BaseProps } from '../base/Props';

interface PopoverProps extends BaseProps {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  gap?: number;
  isVisible?: boolean;
  customView?: React.ReactElement | null | undefined;
}

type DirObject = {
  setPosition: (object: {
    customWidth: number;
    customHeight: number;
    childWidth: number;
    childHeight: number;
    gap: number;
  }) => void;
  borderStyle: StyleProp<ViewStyle>;
};

export class Popover extends React.Component<PopoverProps> {
  static defaultProps = {
    direction: 'top',
    gap: 2
  };

  dirObject: DirObject;

  viewRef: any;

  childrenRef: any;

  customViewRef: any;

  constructor(props: PopoverProps) {
    super(props);
    this.dirObject = {
      setPosition: () => {},
      borderStyle: {}
    };
  }

  dirEnum: { [key: string]: (_style: PopoverStyles) => DirObject } = {
    top: (_style) => {
      return {
        setPosition: ({ customWidth, customHeight, childWidth, gap }) => {
          this.viewRef.setNativeProps({
            top: -(gap + customHeight + 4),
            left: (childWidth - customWidth) / 2
          });
        },
        borderStyle: _style.topTriangle
      };
    },
    bottom: (_style) => {
      return {
        setPosition: ({ customWidth, customHeight, childWidth, gap }) => {
          this.viewRef.setNativeProps({
            bottom: -(gap + customHeight + 4),
            left: (childWidth - customWidth) / 2
          });
        },
        borderStyle: _style.bottomTriangle
      };
    },
    left: (_style) => {
      return {
        setPosition: ({ customWidth, customHeight, childHeight, gap }) => {
          this.viewRef.setNativeProps({
            top: (childHeight - customHeight) / 2,
            left: -(customWidth + gap + 4)
          });
        },
        borderStyle: _style.leftTriangle
      };
    },
    right: (_style) => {
      return {
        setPosition: ({ customWidth, customHeight, childHeight, gap }) => {
          this.viewRef.setNativeProps({
            top: (childHeight - customHeight) / 2,
            right: -(customWidth + gap + 4)
          });
        },
        borderStyle: _style.rightTriangle
      };
    }
  };

  layout = (_style: PopoverStyles) => {
    const { direction = Popover.defaultProps.direction, gap = Popover.defaultProps.gap } = this.props;
    this.dirObject = this.dirEnum[direction](_style);
    this.childrenRef.measure((ox: number, oy: number, childWidth: number, childHeight: number) => {
      this.customViewRef.measure((ox: number, oy: number, customWidth: number, customHeight: number) => {
        this.dirObject.setPosition({
          customWidth,
          customHeight,
          childWidth,
          childHeight,
          gap
        });
      });
    });
  };

  render() {
    const { isVisible, customView } = this.props;
    return (
      <WithTheme themeStyles={styles}>
        {(_style) => (
          <ViewOverflow style={_style.style_popover_container}>
            {isVisible ? (
              <ViewOverflow
                style={[_style.style_popover_wrap]}
                onLayout={() => this.layout(_style)}
                refs={(ref: any) => (this.viewRef = ref)}>
                {React.cloneElement(customView as React.ReactElement, {
                  ref: (ref: any) => (this.customViewRef = ref)
                })}
                <View style={[_style.triangle_container]}>
                  <View style={[this.dirObject.borderStyle]} />
                </View>
              </ViewOverflow>
            ) : null}
            {React.cloneElement(this.props.children as React.ReactElement, {
              ref: (ref: any) => (this.childrenRef = ref)
            })}
          </ViewOverflow>
        )}
      </WithTheme>
    );
  }
}
