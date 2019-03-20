import { StyleSheet } from 'react-native';
import { Theme } from '../Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    number: {
      flex: 1,
      alignItems: 'center'
    },
    current: {
      color: theme.main_text_color
    },
    btn: {
      paddingHorizontal: 10
    }
  });
