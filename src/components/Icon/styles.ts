import { Theme } from '../Theme';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

export interface IconStyles {
  style_default_icon: TextStyle;
  touchable_view: ViewStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<IconStyles>({
    style_default_icon: {
      color: theme.main_text_color,
      fontSize: 12
    },
    touchable_view: {
      minHeight: 20,
      minWidth: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
