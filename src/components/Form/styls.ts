import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    style_list_item_container: {
        width: '75%',
        alignItems: 'flex-end'
    },
    style_open_view_container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    errorinfoText: {
        position: 'absolute',
        bottom: 0,
        left: 16,
        color: 'red'
    },
    style_extend_text: {
        fontSize: 14,
        color: '#999'
    }
});
