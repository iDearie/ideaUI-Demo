import { StyleSheet } from 'react-native';
import { Theme } from '../Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: theme.border_color_1,
      marginBottom: 1
    },
    header_container: {
      height: 50,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: theme.border_color_1,
      marginBottom: 1
    },
    panel_child_view: {
      overflow: 'hidden'
    },
    icon: {
      color: theme.text_color_2
    }
  });
