import * as React from 'react';
import './index.css'

interface PropsType {
  open: boolean;
}
export const DebugFlag = ({open}: PropsType) => {
  if (!open) {
    return null;
  }
  return <div className="root">DEBUG</div>;
};

DebugFlag.defaultProps = {
  open: true
}
