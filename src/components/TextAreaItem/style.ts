import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from '../Theme';

export interface TextAreaItemStyles {
  container: ViewStyle;
  dark_container: ViewStyle;
  light_container: ViewStyle;
  input_item: TextStyle;
  maxLength: TextStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<TextAreaItemStyles>({
    container: {
      padding: 10,
      borderRadius: 5
    },
    light_container: {
      backgroundColor: 'transparent'
    },
    dark_container: {
      backgroundColor: theme.bg_color_2
    },
    maxLength: {
      alignSelf: 'flex-end'
    },
    input_item: {}
  });
