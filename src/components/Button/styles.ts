import { StyleSheet } from 'react-native';
const mainColor = '#ff6644';

export const styles: any = StyleSheet.create({
    style_btn_default_container: {
        backgroundColor: mainColor,
        paddingHorizontal: 40,
        borderRadius: 4
    },
    style_btn_size_large: {
        height: 44
    },
    style_btn_size_default: {
        height: 36
    },
    style_btn_size_small: {
        height: 32
    },
    style_btn_default_text: {
        color: '#fff',
        textAlign: 'center'
    },
    style_btn_size_large_text: {
        lineHeight: 42,
        fontSize: 16
    },
    style_btn_size_default_text: {
        lineHeight: 34,
        fontSize: 15
    },
    style_btn_size_small_text: {
        lineHeight: 30,
        fontSize: 13
    },
    style_btn_default_disabled_neutral_container: {
        backgroundColor: '#ccc'
    },
    style_btn_default_disabled_status_container: {
        backgroundColor: '#FFB2A1'
    },
    style_btn_default_prassIn_container: {
        backgroundColor: '#E55B3D'
    },
    style_btn_ghost_container: {
        borderColor: mainColor,
        borderWidth: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        height: 42,
        borderRadius: 4
    },
    style_btn_ghost_text: {
        color: mainColor,
        textAlign: 'center'
    },
    style_btn_ghost_disabled_neutral_container: {
        backgroundColor: '#ccc',
        borderColor: '#ccc'
    },
    style_btn_ghost_disabled_status_container: {
        backgroundColor: '#FFB2A1'
    },
    style_btn_ghost_prassIn_container: {
        backgroundColor: '#FFEFEC'
    }
});
