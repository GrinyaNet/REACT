import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nexState) {
    console.log('shouldComponentUpdate(nextProps, nexState): decide to render or not to reander');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    console.log();
  }

  render() {
    return <div>{this.props.number}</div>;
  }
}

export default Life;
