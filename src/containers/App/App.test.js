import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';

const fetchProjectsMock = jest.fn();
const fetchPalettesMock = jest.fn();
const setCurrentPaletteMock = jest.fn();

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App 
        fetchProjects={fetchProjectsMock}
        fetchPalettes={fetchPalettesMock}
        setCurrentPalette={setCurrentPaletteMock}
      />
      )
    });
  it('should properly render the component elements', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it.skip('Should call initialFetch on mount', () => {
    const initialFetch = jest.fn();
    wrapper.instance().componentDidMount();
    expect(initialFetch).toHaveBeenCalled();
  });
  it.skip('InitialFetch should call fetchProjects and fetchPalettes', async () => {
  });
  describe('mapStateToProps', () => {
  });
  describe('mapDispatchToProps', () => {
  });
});
