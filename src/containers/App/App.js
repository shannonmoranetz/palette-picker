import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import PaletteSection from '../../components/PaletteSection/PaletteSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';

class App extends Component {
  constructor() {
    super()
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
