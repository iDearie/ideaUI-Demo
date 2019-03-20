import { StyleSheet } from 'react-native';

export const sliderWrapWidth = 24;

export const styles = StyleSheet.create({
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
