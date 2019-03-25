import { StyleSheet } from 'react-native';
import { Theme } from '../Theme';

const dot_position_top = 20;

export const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {},
    item_container: {
      flexDirection: 'row'
    },
    time_line_container: {
      width: 12,
      height: '100%',
      flexDirection: 'column',
      position: 'relative',
      marginRight: 9
    },
    time_line_dot_container: {
      position: 'absolute',
      top: dot_position_top,
      width: 12,
      height: 12,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white'
    },
    time_line_dot_content: {
      width: 4,
      height: 4,
      backgroundColor: '#b4b4b4'
    },
    time_line_first_dot: {
      width: 6,
      height: 6,
      backgroundColor: theme.main_color
    },
    time_line_line_container: {
      width: 1,
      flex: 1,
      backgroundColor: theme.color_neutrals_divider1,
      alignSelf: 'center'
    },
    time_line_first_line: {
      marginTop: dot_position_top
    },
    time_line_last_line: {
      flex: 0,
      height: dot_position_top
    },
    item_child_container: {
      flex: 1,
      paddingVertical: 18,
      borderBottomColor: theme.color_neutrals_divider1,
      borderBottomWidth: 1
    },
    item_child_title: {
      marginBottom: 12.5
    },
    item_last_child_container: {
      borderBottomWidth: 0
    }
  });
