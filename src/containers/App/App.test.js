import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { mockProjects } from '../../__fixtures__/mockData';
import { setLoading } from '../../actions';

jest.mock('../../thunks/fetchProjects')
jest.mock('../../thunks/fetchPalettes')

describe('App', () => {
  let wrapper;
  let fetchProjectsMock = jest.fn();
  let fetchPalettesMock = jest.fn();
  let setLoadingMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <App 
        fetchProjects={fetchProjectsMock}
        fetchPalettes={fetchPalettesMock}
        setLoading={setLoadingMock}
        projects={mockProjects}
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
  });

  describe('mapStateToProps', () => {
    it('should return an object with projects and isLoading as keys', () => {
      const mockState = {
        projects: [],
        isLoading: true,
        error: '',
        palettes: [],
        extra: ''
      }
      const expected = {
        projects: [],
        isLoading: true
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

    it('should call dispatch when setLoading is called', () => {
      const mockDispatch = jest.fn()
      const actionToDispatch = setLoading();
      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setLoading()
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });
  });
});
