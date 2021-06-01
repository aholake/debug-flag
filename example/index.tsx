import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import '../dist/debug-flag.cjs.development.css';

const App = () => {
  return (
    <div>
      <Thing />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
