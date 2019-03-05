const React = require('react');
import Component from './Component';
const ReactDOM = require('react-dom');

describe('root', function () {
  it('renders without problems', function () {
    ReactDOM.render(<Component />, document.getElementById('react-root'))
  });
});
