import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../theme';

export interface ButtonStyle {
  style_btn_default_container: ViewStyle;
  style_btn_size_large: ViewStyle;
  style_btn_size_default: ViewStyle;
  style_btn_size_small: ViewStyle;
  style_btn_default_text: TextStyle;
  style_btn_size_large_text: TextStyle;
  style_btn_size_default_text: TextStyle;
  style_btn_size_small_text: TextStyle;
  style_btn_ghost_text: TextStyle;
  style_btn_default_disabled_neutral_container: ViewStyle;
  style_btn_default_disabled_status_container: ViewStyle;
  style_btn_default_pressIn_container: ViewStyle;
  style_btn_ghost_container: ViewStyle;
  style_btn_ghost_disabled_neutral_container: ViewStyle;
  style_btn_ghost_disabled_status_container: ViewStyle;
  style_btn_ghost_pressIn_container: ViewStyle;
}

export default (theme: Theme) =>
  StyleSheet.create<ButtonStyle>({
    style_btn_default_container: {
      backgroundColor: theme.main_color,
      borderRadius: 4
    },
    style_btn_size_large: {
      height: 44
    },
    style_btn_size_default: {
      height: 36
    },
    style_btn_size_small: {
      height: 32
    },
    style_btn_default_text: {
      color: '#fff',
      textAlign: 'center'
    },
    style_btn_size_large_text: {
      lineHeight: 42,
      fontSize: 16
    },
    style_btn_size_default_text: {
      lineHeight: 34,
      fontSize: 15
    },
    style_btn_size_small_text: {
      lineHeight: 30,
      fontSize: 13
    },
    style_btn_default_disabled_neutral_container: {
      backgroundColor: '#ccc'
    },
    style_btn_default_disabled_status_container: {
      backgroundColor: '#FFB2A1'
    },
    style_btn_default_pressIn_container: {
      opacity: 0.8
    },
    style_btn_ghost_container: {
      borderColor: theme.main_color,
      borderWidth: 1,
      backgroundColor: '#fff',
      borderRadius: 4
    },
    style_btn_ghost_text: {
      color: theme.main_color,
      textAlign: 'center'
    },
    style_btn_ghost_disabled_neutral_container: {
      backgroundColor: '#ccc',
      borderColor: '#ccc'
    },
    style_btn_ghost_disabled_status_container: {
      backgroundColor: '#FFB2A1'
    },
    style_btn_ghost_pressIn_container: {
      backgroundColor: '#FFEFEC'
    }
  });
