import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { Theme } from './../Theme/index';

export interface ListItemStyles {
  container: ViewStyle;
  defaultLabelStyle: TextStyle;
  style_list_item_container: ViewStyle;
  style_open_view_container: ViewStyle;
  styles_extend_component_container: ViewStyle;
  style_open_view_container_no_label: ViewStyle;
  style_label_view_container: ViewStyle;
  style_label_view_container_icon: ImageStyle;
  arrow_png: ImageStyle;
  styles_extend_text: TextStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<ListItemStyles>({
    container: { backgroundColor: 'white' },
    defaultLabelStyle: {
      fontSize: 14,
      color: theme.text_color_1
    },

    style_list_item_container: {
      height: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 16,
      backgroundColor: 'white',
      borderBottomColor: theme.border_color_1
    },
    style_open_view_container: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    styles_extend_component_container: { flexDirection: 'row', alignItems: 'center' },
    style_open_view_container_no_label: { justifyContent: 'flex-start', width: '100%' },
    style_label_view_container: { flexDirection: 'row', alignItems: 'center', marginRight: 10 },
    style_label_view_container_icon: { width: 13, height: 13, marginRight: 15 },
    arrow_png: {
      width: 13,
      height: 13
    },
    styles_extend_text: {
      color: theme.text_color_2,
      fontSize: 14
    }
  });
