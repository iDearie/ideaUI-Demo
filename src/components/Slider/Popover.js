import React from 'react';
import { View } from 'react-native';
import ViewOverflow from '../overflow';
import { styles } from './style';

export class Popover extends React.Component {
    state = {};

    dirObject = {};

    dirEnum = {
        top: {
            setPositon: ({ customWidth, customHeight, childWidth, customPx, customPy }) => {
                const { gap } = this.props;
                this.viewRef.setNativeProps({
                    top: -(gap + customHeight + 4),
                    left: (childWidth - customWidth) / 2
                });
            },
            borderStyle: styles.topTriangle
        },
        bottom: {
            setPositon: ({ customWidth, customHeight, childWidth }) => {
                const { gap } = this.props;
                this.viewRef.setNativeProps({
                    bottom: -(gap + customHeight + 4),
                    left: (childWidth - customWidth) / 2
                });
            },
            borderStyle: styles.bottomTriangle
        },
        left: {
            setPositon: ({ customWidth, customHeight, childHeight }) => {
                const { gap } = this.props;
                this.viewRef.setNativeProps({
                    top: (childHeight - customHeight) / 2,
                    left: -(customWidth + gap + 4)
                });
            },
            borderStyle: styles.leftTriangle
        },
        right: {
            setPositon: ({ customWidth, customHeight, childHeight }) => {
                const { gap } = this.props;
                this.viewRef.setNativeProps({
                    top: (childHeight - customHeight) / 2,
                    right: -(customWidth + gap + 4)
                });
            },
            borderStyle: styles.rightTriangle
        }
    };

    layout = () => {
        const { direction } = this.props;
        this.dirObject = this.dirEnum[direction];
        this.childrenRef.measure((ox, oy, childWidth, childHeight) => {
            this.customViewRef.measure((ox, oy, customWidth, customHeight) => {
                this.dirObject.setPositon({
                    customWidth,
                    customHeight,
                    childWidth,
                    childHeight
                });
            });
        });
    };

    render() {
        const { isVisible, customView } = this.props;
        return (
            <ViewOverflow style={{ position: 'relative', height: '100%' }}>
                {isVisible ? (
                    <ViewOverflow
                        style={[{ position: 'absolute', zIndex: 9999, top: -500 }]}
                        onLayout={({ nativeEvent: e }) => this.layout(e)}
                        refs={ref => (this.viewRef = ref)}>
                        {React.cloneElement(customView, { ref: ref => (this.customViewRef = ref) })}
                        <View style={[styles.triangle_container]}>
                            <View style={[this.dirObject.borderStyle]} />
                        </View>
                    </ViewOverflow>
                ) : null}
                {React.cloneElement(this.props.children, {
                    ref: ref => (this.childrenRef = ref)
                })}
            </ViewOverflow>
        );
    }
}

Popover.defaultProps = {
    direction: 'top',
    gap: 2
};
