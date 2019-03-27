import React, { Component } from 'react';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { setLoading } from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../containers/ProjectSection/ProjectSection';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';

export class App extends Component {
  componentDidMount = () => {
    this.initialFetch();
  }

  initialFetch = async () => {
    await this.props.fetchProjects();
    await this.props.projects.forEach((project) => {
      this.props.fetchPalettes(project.id);
    })
    this.props.setLoading(false)
  }

  render() {
    return (
      <div className="App">
				{!this.props.isLoading ? (
          <div>
            <Header />
            <div className="app-content">
              <PaletteSection/>
              <ProjectSection/>
            </div>
          </div>
        ) : (
          <LoadingDisplay/>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  isLoading: state.isLoading
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPalettes: (id) => dispatch(fetchPalettes(id)),
  setLoading: (isLoading) => dispatch(setLoading(isLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
