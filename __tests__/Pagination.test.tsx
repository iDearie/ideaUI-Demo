import React from 'react';
import renderer from 'react-test-renderer';
import Pagination from '../src/components/Pagination';
import { ReactWrapper, mount } from 'enzyme';

describe('Pagination', () => {
  it('组件快照', () => {
    const renderedValue = renderer.create(<Pagination current={1} total={20} />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });

  describe('rendering', () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
      wrapper = mount(<Pagination current={1} total={20} />);
    });

    it('按钮渲染', () => {
      const buttonList = (prevText: string = '上一页', nextText: string = '下一页') =>
        wrapper.findWhere((node) => {
          const type: string = node.name();
          const text: string = node.text();
          return type === 'Button' && (text === prevText || text === nextText);
        });
      expect(buttonList()).toHaveLength(2);
      wrapper.setProps({ locale: { prevText: '前', nextText: '后' } });
      expect(buttonList('前', '后')).toHaveLength(2);
    });

    it('simple模式渲染', () => {
      wrapper.setProps({ simple: true });
      const simpleWrap = wrapper.findWhere((node) => {
        return node.name() === 'Text' && node.text() === '1 / 20';
      });
      expect(simpleWrap).toHaveLength(0);
    });

    it('按钮事件', () => {
      const prevButton = wrapper.findWhere((node) => node.name() === 'Button' && node.text() === '上一页');
      const nextButton = wrapper.findWhere((node) => node.name() === 'Button' && node.text() === '下一页');
      const prevButtonProps: any = prevButton.props();
      const nextButtonProps: any = nextButton.props();
      expect(prevButtonProps.disabled).toBe(true);
      expect(nextButtonProps.disabled).toBe(false);
      prevButtonProps.onPress();
      expect(wrapper.state('current')).toBe(1);
      nextButtonProps.onPress();
      expect(wrapper.state('current')).toBe(2);
      wrapper.setProps({ current: 20 });
      nextButtonProps.onPress();
      expect(wrapper.state('current')).toBe(20);
      prevButtonProps.onPress();
      expect(wrapper.state('current')).toBe(19);
    });
  });
});
