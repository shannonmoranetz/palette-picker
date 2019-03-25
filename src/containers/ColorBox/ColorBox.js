import React from 'react';
import ColorCard from '../../containers/ColorCard/ColorCard';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

export const ColorBox = (props) => {
    console.log(props)
    return (
        <div className="ColorBox">
            {
                props.projects.map(project => {
                    return <ColorCard key={uuid()}/>
                })
            }
        </div>
    )
}

export const mapStateToProps = (state) => ({
    projects: state.projects
  });

export default connect(mapStateToProps)(ColorBox);