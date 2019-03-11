import React from 'react';
import { View } from 'react-native';
import { styles } from './style';

export class SliderLine extends React.Component<{ refs: any }> {
    render() {
        const { refs } = this.props;
        return (
            <View style={[styles.style_slider_line_container]}>
                <View style={[styles.style_slider_line_active]} ref={refs} />
            </View>
        );
    }
}
