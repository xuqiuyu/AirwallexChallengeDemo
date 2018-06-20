import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// time is limited , so just give one test case
import TestComp from '../src/component/testComp';
configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    text: 'test',
    onClick: jest.fn()
  };

  const wrapper = shallow(<TestComp {...props} />);
  return {
    props,
    wrapper
  };
};


describe('TestComp Component test', () => {
  const { wrapper, props } = setup();

  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('could be rendered', () => {
    expect(wrapper.find('button').exists());
  });

  it('renders the correct text', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <TestComp
        text="Hello World"
        onClick={onClick}
      />
    );
    expect(wrapper.find(".test").text()).toEqual('Hello World')
  });

  it('could be click', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <TestComp
        text="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
        onClick={onClick}
      />
    );
    wrapper.find('.test').simulate('click');
    expect(onClick).toBeCalled();
  });

  it('should render the hidden extraInfo block if state.showExtraInfo is true', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <TestComp
        text="Hello World"
        onClick={onClick}
      />
    );
    wrapper.setState({ showExtraInfo: true });
    expect(wrapper.find('.test_hidden').length).toBe(1);

  });

  afterAll(() => {
    jest.useRealTimers();
  });
});


