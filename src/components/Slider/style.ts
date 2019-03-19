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
  },
  style_popover_content_text: { color: '#fff', fontSize: 10, flexWrap: 'nowrap', lineHeight: 16 },
  triangle_container: {
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0
  },
  topTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderBottomWidth: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    marginTop: 0,
    alignSelf: 'center',
    borderTopColor: '#ff6644',
    marginBottom: 4,
    position: 'absolute',
    bottom: -8
  },
  bottomTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 0,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    alignSelf: 'center',
    borderBottomColor: '#ff6644',
    position: 'absolute',
    marginTop: 4,
    marginBottom: 0,
    top: -8
  },
  leftTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 0,
    backgroundColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: '#ff6644',
    alignSelf: 'center',
    position: 'absolute',
    right: -4
  },
  rightTriangle: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderLeftWidth: 0,
    borderRightWidth: 5,
    backgroundColor: 'transparent',
    borderRightColor: '#ff6644',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    alignSelf: 'center',
    position: 'absolute',
    left: -4
  }
});
