import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../Theme';

export interface PaginationStyles {
  container: ViewStyle;
  number: ViewStyle;
  current: TextStyle;
  btn: ViewStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<PaginationStyles>({
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
      color: theme.main_color
    },
    btn: {
      paddingHorizontal: 10
    }
  });
