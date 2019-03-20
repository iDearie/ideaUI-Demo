import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { Theme } from '../theme';

export interface CheckBoxStyles {
  style_checkbox_list: ViewStyle;
  style_checkbox_inline: ViewStyle;
  style_checkbox_inline_tag_item_view: ViewStyle;
  style_checkbox_inline_tag_item_text: TextStyle;
  style_checkbox_inline_tag_item_view_active: ViewStyle;
  style_checkbox_inline_tag_item_text_active: TextStyle;
  style_checkbox_inline_checkbox_item_view: ViewStyle;
  style_checkbox_inline_checkbox_item_image: ImageStyle;
  style_checkbox_inline_checkbox_item_text: TextStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<CheckBoxStyles>({
    style_checkbox_list: {
      flexDirection: 'column'
    },
    style_checkbox_inline: {
      flexDirection: 'row'
    },
    style_checkbox_inline_tag_item_view: {
      borderColor: theme.border_color_2,
      borderWidth: 0.5,
      marginLeft: 10,
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    style_checkbox_inline_tag_item_text: {
      color: theme.text_color_2
    },
    style_checkbox_inline_tag_item_view_active: {
      borderColor: theme.main_border_color,
      paddingHorizontal: 10,
      paddingVertical: 5
    },
    style_checkbox_inline_tag_item_text_active: {
      color: theme.main_text_color
    },
    style_checkbox_inline_checkbox_item_view: {
      marginLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },
    style_checkbox_inline_checkbox_item_image: {
      width: 14,
      height: 14
    },
    style_checkbox_inline_checkbox_item_text: {
      paddingLeft: 5,
      textAlign: 'center'
    }
  });
