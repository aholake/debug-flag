import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DebugFlag } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DebugFlag />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
