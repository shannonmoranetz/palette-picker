import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

class App extends Component {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch('https://palette-picker-api.herokuapp.com/api/v1/projects')
    const result = await response.json()
    this.setState({ projects: result })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          App
          <Header />
          <PaletteSection />
          <ProjectSection />
        </header>
      </div>
    );
  }
}

export default App;
