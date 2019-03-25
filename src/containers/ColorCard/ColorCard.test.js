import React from 'react';
import { shallow } from 'enzyme';
import { ColorCard } from './ColorCard';

describe('ColorCard', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <ColorCard/>
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});