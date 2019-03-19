import React from 'react';
import { Image, PanResponder, Text, View, StyleProp, ViewStyle } from 'react-native';
import ViewOverflow from '../overflow';
import { Popover } from './Popover';
import { styles } from './style';

interface SliderWrapProps {
  onDrag?: (object: any) => void;
  message?: string;
  style?: StyleProp<ViewStyle>;
  refs?: any;
  showPopover?: boolean;
}

export class SliderWrap extends React.Component<SliderWrapProps> {
  state = {
    isVisible: false
  };
  panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
    onPanResponderMove: ({ nativeEvent }, gestureState) => {
      const { onDrag } = this.props;
      onDrag && onDrag({ gestureState, nativeEvent });
    }
  });

  render() {
    const { message = '应届', style, refs, showPopover } = this.props;
    return (
      <ViewOverflow refs={refs} style={[styles.style_slider_wrap_view, style]} {...this.panResponder.panHandlers}>
        <Popover
          isVisible={showPopover}
          customView={
            <View style={[styles.style_popover_content]}>
              <Text style={[styles.style_popover_content_text]}>{message}</Text>
            </View>
          }>
          <Image
            style={[styles.style_slider_wrap_view]}
            source={require('./images/slider_wrap.png')}
            resizeMode={'contain'}
          />
        </Popover>
      </ViewOverflow>
    );
  }
}
