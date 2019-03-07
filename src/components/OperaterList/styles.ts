import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    container: { backgroundColor: 'white' },

    defaultLabelStyle: {
        fontSize: 14,
        color: '#333333'
    },

    style_list_item_container: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        backgroundColor: 'white',
        borderBottomColor: 'rgb(234, 234, 234)'
    },
    style_open_view_container: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    styles_extend_component_container: { flexDirection: 'row', alignItems: 'center' },
    style_open_view_container_no_label: { justifyContent: 'flex-start', width: '100%' },
    style_label_view_container: { flexDirection: 'row', alignItems: 'center' },
    style_label_view_container_icon: { width: 13, height: 13, marginRight: 15 },
    arror_png: {
        width: 13,
        height: 13
    },
    styles_extend_text: {
        color: '#999',
        fontSize: 14
    }
});
