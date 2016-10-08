import React, { Component, PropTypes } from 'react';
const { array } = PropTypes;

import JobsListItem from '../JobsListItem/JobsListItem';

class JobsList extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <ul>
        {this.props.jobs.map( ( job, i ) => {
          return <JobsListItem key={i} {...job} />;
        })}
      </ul>
    );
  }

}

JobsList.defaultProps = {
  jobs: [],
};

JobsList.propTypes = {
  jobs: array,
};

export default JobsList;
