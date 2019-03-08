import { main_bg_color, border_color } from './../CustomTheme/index';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    style_tab_title_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 50,
        position: 'relative',
        borderBottomColor: border_color,
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
        backgroundColor: main_bg_color,
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
    }
});
