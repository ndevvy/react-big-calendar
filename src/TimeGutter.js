import PropTypes from 'prop-types';
import React from 'react';

class TimeGutter extends React.Component {
  static propTypes = {
    content: PropTypes.string,
    value: PropTypes.instanceOf(Date).isRequired
  }

  render() {
    return(<span>{this.props.content}</span>);
  }
}

export default TimeGutter;
