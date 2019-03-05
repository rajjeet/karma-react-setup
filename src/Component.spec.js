import React from 'react';
import Component from './Component';
import {mount, shallow} from 'enzyme';

describe('root', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Component value={'test'} />);
  });

  it('renders without problems', function () {
    // console.log(wrapper.find('input').debug());
    // wrapper.find('input').setProps({value: 'a'});
    // wrapper.find('input').props().onChange({value: 1});
    wrapper.find('input').simulate('change', {}, {value: '1'})
    console.log(wrapper.debug());
  });
});
