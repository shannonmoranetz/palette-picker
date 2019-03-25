import React, { Component } from 'react';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ParentSection from '../../components/ParentSection/ParentSection';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount = () => {
    this.initialFetch();
  }

  initialFetch = async () => {
    await this.props.fetchProjects();
    await this.props.projects.forEach((project) => {
      this.props.fetchPalettes(project.id);
    })
  }

  render() {
    return (
      <div className="App">
				{!this.props.isLoading ? (
        <header className="App-header">
          <Header />
          <ParentSection />
        </header>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  palettes: state.palettes,
  currentPaletteId: state.currentPaletteId,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPalettes: (id) => dispatch(fetchPalettes(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
