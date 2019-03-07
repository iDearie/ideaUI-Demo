import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
    style_switch_container: {
        height: 22.5,
        width: 37.5,
        borderRadius: 11.25,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1
    },
    style_switch_container_checked: {
        backgroundColor: '#FF6644',
        borderColor: '#FF6644'
    },
    style_switch_container_unchecked: {
        backgroundColor: 'white',
        borderColor: 'rgb(229, 229, 229)'
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
    },
});
