import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';

jest.mock('../../thunks/fetchProjects')
jest.mock('../../thunks/fetchPalettes')

describe('App', () => {
  let wrapper;
  let fetchProjectsMock;
  let fetchPalettesMock;
  beforeEach(() => {
    wrapper = shallow(
      <App 
        fetchProjects={fetchProjectsMock}
        fetchPalettes={fetchPalettesMock}
      />
      )
    });
  describe('App component', () => {
    it('should properly render the component elements', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('Should call initialFetch on mount', () => {
      wrapper.instance().initialFetch = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();
      expect(wrapper.instance().initialFetch).toHaveBeenCalled();
    });
    it.skip('InitialFetch should call fetchProjects and fetchPalettes', async () => {
    });
  });

  describe('mapStateToProps', () => {
    it('should return an object with projects, isLoading, and error as keys', () => {
      const mockState = {
        projects: [],
        isLoading: false,
        error: '',
        palettes: [],
        extra: ''
      }
      const expected = {
        projects: [],
        isLoading: false,
        error: ''
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    });
  }); 

  describe('mapDispatchToProps', () => {
    it('should call dispatch when fetchProjects is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchProjects();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchProjects()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

    it('should call dispatch when fetchPalettes is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = fetchPalettes();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.fetchPalettes()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});
