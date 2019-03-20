import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import renderer from 'react-test-renderer';
import sinon from 'sinon';
import { Button } from '../src/components/Button';
import List from '../src/components/List';

describe('List', () => {
  it('组件快照', () => {
    const renderedValue = renderer
      .create(
        <List>
          <List.Item label={'label'}>
            <Button />
          </List.Item>
        </List>
      )
      .toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  describe('rendering', () => {
    let wrapper: ReactWrapper;
    beforeEach(() => {
      wrapper = mount(
        <List.Item label={'Label'}>
          <Button />
        </List.Item>
      );
    });

    it('TouchableOpacity 标签渲染正确', () => {
      expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
      const onPress = sinon.spy();
      wrapper.setProps({ onPress });
      const props: any = wrapper.props();
      props.onPress();
      expect(onPress.calledOnce).toBe(true);
      wrapper.setProps({ touchable: false });
      expect(wrapper.find(TouchableOpacity)).toHaveLength(0);
      props.onPress();
      expect(onPress.calledOnce).toBe(false);
    });

    it('children渲染正确', () => {
      expect(wrapper.find(Button)).toHaveLength(1);
    });

    it('label 渲染正确', () => {
      expect(
        wrapper.findWhere((node) => {
          const text = node.text();
          const type = node.type();
          return type === 'Text' && text === 'Label';
        })
      ).toHaveLength(1);
    });

    it('箭头渲染正确', () => {
      const mapItem = (node: ReactWrapper<any, any>) => {
        const type = node.type();
        const source = node.prop('source') && node.prop('source').testUri;
        return type === 'Image' && source === '../../../src/components/List/arrow.png';
      };
      expect(wrapper.findWhere(mapItem)).toHaveLength(1);
      wrapper.setProps({ showArrow: false });
      expect(wrapper.findWhere(mapItem)).toHaveLength(0);
    });

    it('下边框渲染正确', () => {
      wrapper.setProps({ borderBottom: 1 });
      const borderBottomWrapper = wrapper.findWhere((node) => {
        const type = node.type();
        const style = node.prop('style');
        return type === 'View' && style[2] && style[2].borderBottomWidth === 1;
      });
      expect(borderBottomWrapper).toHaveLength(1);
    });
  });
});
