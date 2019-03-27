import React, { Component } from 'react';
import { fetchProjects } from '../../thunks/fetchProjects';
import { fetchPalettes } from '../../thunks/fetchPalettes';
import { setLoading } from '../../actions/index';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ParentSection from '../../components/ParentSection/ParentSection';
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
        <header className="App-header">
          <Header />
          <ParentSection />
        </header>
        ) : (
          <LoadingDisplay/>
        )}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects,
  isLoading: state.isLoading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects()),
  fetchPalettes: (id) => dispatch(fetchPalettes(id)),
  setLoading: (isLoading) => dispatch(setLoading(isLoading))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
