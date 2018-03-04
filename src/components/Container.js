// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData, getUserLocation } from '../actions';

type Props = { getData: () => void };

export default function(ComposedComponent) {
  class StationContainer extends Component<Props> {
    componentDidMount() {
      this.props.getData();
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      getData: bindActionCreators(getData, dispatch),
      getUserLocation: bindActionCreators(getUserLocation, dispatch),
    };
  }

  function mapStateToProps(state) {
    return { stations: state.stations };
  }

  return connect(mapStateToProps, mapDispatchToProps)(StationContainer);
}
