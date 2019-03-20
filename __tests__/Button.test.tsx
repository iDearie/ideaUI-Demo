import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { Button } from '../src/components/Button';

const createTestProps = (props: Object) => ({
  ...props
});

describe('Button', () => {
  describe('rendering', () => {
    let wrapper: ShallowWrapper;
    let props: Object;
    beforeEach(() => {
      props = createTestProps({});
      wrapper = shallow(<Button>Button</Button>);
    });

    it('should render a <View />', () => {
      expect(wrapper.find(View)).toHaveLength(1);
    });
  });
});
