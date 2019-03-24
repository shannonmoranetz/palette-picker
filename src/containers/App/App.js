import React, { Component } from 'react';
import { fetchProjects } from '../../thunks/fetchProjects';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import ParentSection from '../../components/ParentSection/ParentSection';

export class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount = async () => {
    await this.props.fetchProjects();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>App</p>
          <Header />
          <ParentSection />
        </header>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  projects: state.projects
});

export const mapDispatchToProps = (dispatch) => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
