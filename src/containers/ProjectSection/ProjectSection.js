import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectControls from '../../containers/ProjectControls/ProjectControls';
import Search from '../../containers/Search/Search';
import ProjectList from '../../containers/ProjectList/ProjectList';

export class ProjectSection extends Component {

	render() {
		return (
			<div className="ProjectSection">
				<div className="subheading-container">
					<h2 className="project-header">{this.props.loadedProject ? this.props.loadedProject.toUpperCase() : 'NO PROJECT LOADED'}</h2>
				</div>
				<div className="content-container">
					<ProjectControls/>
					<Search/>
					<ProjectList/>
				</div>
			</div>
		)
	}
}

export const mapStateToProps = (state) => ({
	loadedProject: state.loadedProject
});

export default connect(mapStateToProps)(ProjectSection);
