import React, { Component } from 'react';

export class ProjectControls extends Component {
  render() {
    return (
      <div className="ProjectControls">
        <form className="create-project-form">
          <label htmlFor="create-project">Create your project:</label><br/>
          <input type="text" name="create-project" className="create-project-input"></input>
          <button type="submit" className="save-project-button">Save Project</button>
        </form>
        <form className="save-palette-form">
          <label htmlFor="save-palette" className="save-palette-label">Save your palette:</label><br/>
          <input type="text" name="save-palette" className="save-palette-input"></input>
          <select>
            <option value="default">Save to:</option>
          </select>
          <button type="submit" className="save-palette-button">Save Palette</button>
        </form>
      </div>
    );
  }
}

export default ProjectControls;
