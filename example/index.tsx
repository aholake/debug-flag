import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DebugFlag } from '../dist';

const App = () => {
  return (
    <div>
      <DebugFlag open={true} label="STAGING" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
