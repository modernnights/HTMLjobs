import React, { Component, PropTypes } from 'react';
const { number, string } = PropTypes;

class JobsListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>TODO: populate job</li>;
  }
}

JobsListItem.propTypes = {
  id: number.isRequired,
  bucket: string.isRequired,
  name: string.isRequired,
  description: string,
  status: string.isRequired,
  assigned: string,
  openedOn: string,
  dueBy: string.isRequired,
  lastModified: string.isRequired,
};