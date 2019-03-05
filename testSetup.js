import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
var expect = require('chai').expect;

Enzyme.configure({adapter: new Adapter()});

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
