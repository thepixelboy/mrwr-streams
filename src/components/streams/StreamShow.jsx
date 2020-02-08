import React from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Loading...';
    }

    const { title, description } = this.props.stream;

    return (
      <div>
        <h2>{title}</h2>
        <h5>{description}</h5>
      </div>
    );
  }

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
