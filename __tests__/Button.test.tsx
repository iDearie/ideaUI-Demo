import { mount, ReactWrapper } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import sinon from 'sinon';
import { Button } from '../src/components/Button';

const createTestProps = (props: Object) => ({
  ...props
});

describe('Button', () => {
  let wrapper: ReactWrapper;
  const onPress = sinon.spy();
  let touchableWithoutFeedback: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Button onPress={onPress}>Button</Button>);
    touchableWithoutFeedback = wrapper.find(TouchableWithoutFeedback).first();
  });

  describe('rendering', () => {
    it('组件快照', () => {
      const renderedValue = renderer.create(<Button>Button</Button>).toJSON();
      expect(renderedValue).toMatchSnapshot();
    });

    it('应该渲染一个 <TouchableWithoutFeedback/> ', () => {
      expect(touchableWithoutFeedback).toHaveLength(1);
    });

    it('应该渲染子节点', () => {
      expect(wrapper.contains('Button')).toBe(true);
    });
  });
  describe('onPressing', () => {
    it('单击Button组件，执行onPress方法', () => {
      let props: any = touchableWithoutFeedback.props();
      props.onPress();
      expect(onPress.calledOnce).toBeTruthy();
    });

    it('点击Button组件，更改state:{pressIn: false -> true -> false}', () => {
      let props: any = touchableWithoutFeedback.props();
      props.onPressIn();
      expect(wrapper.state('pressIn')).toBe(true);
      props.onPressOut();
      expect(wrapper.state('pressIn')).toBe(false);
    });
  });
});
