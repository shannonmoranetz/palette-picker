import React from 'react';
import { shallow } from 'enzyme';
import { ProjectList } from './ProjectList';

const projectsMock = { id: 1, name: 'testProject' };
const palettesMock = { id: 1, project_id: 1, name: 'testPalette' };

describe('ProjectList', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
        <ProjectList projects={projectsMock} palettes={palettesMock} />
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
});