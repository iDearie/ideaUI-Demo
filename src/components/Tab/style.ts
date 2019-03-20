import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { Theme } from '../Theme';

export interface TabStyles {
  style_tab_title_container: ViewStyle;
  style_tab_title_item_container: ViewStyle;
  style_tab_title_active_container: ViewStyle;
  style_tab_title_active_wrap: ViewStyle;
  style_tab_container: ViewStyle;
  style_tab_wrap: ViewStyle;
  style_item_container: ViewStyle;
  style_tab_title_item_text: TextStyle;
  style_tab_title_active_item_text: TextStyle;
}

export const styles = (theme: Theme) =>
  StyleSheet.create<TabStyles>({
    style_tab_title_container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      height: 50,
      position: 'relative',
      borderBottomColor: theme.border_color_1,
      borderBottomWidth: 0.5
    },
    style_tab_title_item_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    style_tab_title_item_text: {
      textAlign: 'center',
      lineHeight: 50
    },
    style_tab_title_active_container: {
      position: 'absolute',
      bottom: 0,
      height: 5
    },
    style_tab_title_active_wrap: {
      backgroundColor: theme.main_bg_color,
      width: 10,
      height: '100%',
      alignSelf: 'center'
    },
    style_tab_container: {
      height: '100%',
      width: '100%'
    },
    style_tab_wrap: {
      flexDirection: 'row'
    },
    style_item_container: { flex: 1, height: '100%', overflow: 'hidden' },
    style_tab_title_active_item_text: { color: theme.main_text_color }
  });
