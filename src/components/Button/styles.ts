import { StyleSheet } from 'react-native';
import { Theme } from '../theme';

export default (theme: Theme) => {
  console.log('TCL: theme', theme);
  return {
    style_btn_default_container: {
      backgroundColor: theme.main_bg_color,
      paddingHorizontal: 40,
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
    style_btn_default_prassIn_container: {
      opacity: 0.8
    },
    style_btn_ghost_container: {
      borderColor: theme.main_border_color,
      borderWidth: 1,
      backgroundColor: '#fff',
      paddingHorizontal: 40,
      height: 42,
      borderRadius: 4
    },
    style_btn_ghost_text: {
      color: theme.main_text_color,
      textAlign: 'center'
    },
    style_btn_ghost_disabled_neutral_container: {
      backgroundColor: '#ccc',
      borderColor: '#ccc'
    },
    style_btn_ghost_disabled_status_container: {
      backgroundColor: '#FFB2A1'
    },
    style_btn_ghost_prassIn_container: {
      backgroundColor: '#FFEFEC'
    }
  };
};
