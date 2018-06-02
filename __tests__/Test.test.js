import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TestComp from '../src/component/testComp';

configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    text: 'test',
    onClick: jest.fn()
  };

  // shallow create Comp
  const wrapper = shallow(<TestComp {...props} />);
  return {
    props,
    wrapper
  };
};


describe('test TestComp', () => {
  const { wrapper, props } = setup();

  it('TestComp Component should be rendered', () => {
    expect(wrapper.find('button').exists());
  });
});
