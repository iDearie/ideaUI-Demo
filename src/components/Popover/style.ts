import { StyleSheet, ViewStyle } from 'react-native';
import { Theme } from '../Theme';

export const sliderWrapWidth = 24;

export interface PopoverStyles {
  style_popover_container: ViewStyle;
  style_popover_wrap: ViewStyle;
  triangle_container: ViewStyle;
  topTriangle: ViewStyle;
  bottomTriangle: ViewStyle;
  leftTriangle: ViewStyle;
  rightTriangle: ViewStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<PopoverStyles>({
    style_popover_container: { position: 'relative', height: '100%' },
    style_popover_wrap: { position: 'absolute', zIndex: 9999, top: -500 },
    triangle_container: {
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      backgroundColor: 'transparent',
      position: 'absolute',
      top: 0,
      left: 0
    },
    topTriangle: {
      width: 0,
      height: 0,
      borderTopWidth: 5,
      borderBottomWidth: 0,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderBottomColor: 'transparent',
      marginTop: 0,
      alignSelf: 'center',
      borderTopColor: theme.main_border_color,
      marginBottom: 4,
      position: 'absolute',
      bottom: -8
    },
    bottomTriangle: {
      width: 0,
      height: 0,
      borderTopWidth: 0,
      borderBottomWidth: 5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      backgroundColor: 'transparent',
      borderLeftColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      alignSelf: 'center',
      borderBottomColor: theme.main_border_color,
      position: 'absolute',
      marginTop: 4,
      marginBottom: 0,
      top: -8
    },
    leftTriangle: {
      width: 0,
      height: 0,
      borderTopWidth: 5,
      borderBottomWidth: 5,
      borderLeftWidth: 5,
      borderRightWidth: 0,
      backgroundColor: 'transparent',
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: theme.main_border_color,
      alignSelf: 'center',
      position: 'absolute',
      right: -4
    },
    rightTriangle: {
      width: 0,
      height: 0,
      borderTopWidth: 5,
      borderBottomWidth: 5,
      borderLeftWidth: 0,
      borderRightWidth: 5,
      backgroundColor: 'transparent',
      borderRightColor: theme.main_border_color,
      borderTopColor: 'transparent',
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
      alignSelf: 'center',
      position: 'absolute',
      left: -4
    }
  });
