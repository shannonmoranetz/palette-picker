import React, { Component } from 'react';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { setCurrentPalette } from '../../actions/index';
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
    const initialPaletteId = 1;
    await this.props.fetchProjects();
    await this.props.fetchPalettes(initialPaletteId);
  }

  render() {
    return (
      <div className="App">
				{!this.props.isLoading && !this.props.error ? (
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
  currentPalette: state.currentPalette,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPalettes: (id) => dispatch(fetchPalettes(id)),
  setCurrentPalette: (id) => dispatch(setCurrentPalette(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
