import { StyleSheet } from 'react-native';
import { Theme } from '../Theme';

export const sliderWrapWidth = 24;

export const styles = (theme: Theme) =>
  StyleSheet.create({
    style_slider_wrap_view: {
      width: sliderWrapWidth,
      height: sliderWrapWidth,
      borderRadius: 2,
      position: 'absolute',
      zIndex: 100
    },
    style_slider_wrap_text: {
      color: theme.main_text_color,
      fontSize: 8,
      width: '100%',
      textAlign: 'center',
      letterSpacing: 1.4
    },
    style_slider_container_view: {
      position: 'relative',
      height: 100,
      backgroundColor: 'white',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    style_slider_line_container: {
      backgroundColor: theme.bg_color_1,
      width: '100%',
      height: 3,
      position: 'relative'
    },
    style_slider_line_active: {
      height: '100%',
      backgroundColor: theme.main_bg_color,
      position: 'absolute',
      left: sliderWrapWidth,
      right: sliderWrapWidth
    }
  });
