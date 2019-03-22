import { StyleSheet } from 'react-native';
import { Theme } from '../Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1
    },
    input_container: {
      textAlign: 'right',
      color: theme.text_color_2,
      padding: 0,
      height: 40,
      flex: 1
    },
    password_visible_btn: {
      color: theme.text_color_2,
      width: 14,
      marginLeft: 10,
      lineHeight: 40
    },
    close_btn: {
      color: theme.text_color_2,
      width: 14,
      marginLeft: 10,
      lineHeight: 40
    }
  });
