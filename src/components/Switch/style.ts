import { StyleSheet, Platform } from 'react-native';
import { Theme } from '../Theme';

export const styles = (theme: Theme) =>
  StyleSheet.create({
    style_switch_container: {
      height: 22.5,
      width: 37.5,
      borderRadius: 11.25,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1
    },
    style_switch_container_checked: {
      backgroundColor: theme.bg_color_1,
      borderColor: theme.main_border_color
    },
    style_switch_container_unchecked: {
      backgroundColor: 'white',
      borderColor: theme.border_color_2
    },
    style_switch_warp: {
      width: 20,
      height: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0.1, height: 0.1 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 3,
      transform: [{ translateX: 15.5 }]
    }
  });
