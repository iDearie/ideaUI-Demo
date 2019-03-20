import { StyleSheet } from 'react-native';

export const sliderWrapWidth = 24;

export const styles = StyleSheet.create({
  style_slider_wrap_view: {
    width: sliderWrapWidth,
    height: sliderWrapWidth,
    borderRadius: 2,
    position: 'absolute',
    zIndex: 100
  },
  style_slider_wrap_text: {
    color: '#ff6644',
    fontSize: 8,
    width: '100%',
    textAlign: 'center',
    letterSpacing: 1.4
  },
  style_slider_container_view: {
    position: 'relative',
    height: 100,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  style_slider_line_container: {
    backgroundColor: 'rgb(222, 222, 222)',
    width: '100%',
    height: 3,
    position: 'relative'
  },
  style_slider_line_active: {
    height: '100%',
    backgroundColor: '#ff6644',
    position: 'absolute',
    left: sliderWrapWidth,
    right: sliderWrapWidth
  },
  style_popover_content: {
    backgroundColor: '#ff6644',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 3,
    minWidth: 35
  }
});
