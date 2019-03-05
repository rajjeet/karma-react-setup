import React from 'react';
import Component from './Component';
import {mount} from 'enzyme';

describe('root', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Component/>);
  });

  it('renders without problems', function () {
    console.log(wrapper.debug());
  });

});
