import React from 'react';
import Component from './Component';
import {mount, shallow} from 'enzyme';

describe('root', function () {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Component/>);
  });

  it('renders without problems', function () {
    console.log(wrapper.debug());
    expect(wrapper.find('div')).to.have.lengthOf(1);
  });

});
