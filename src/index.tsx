import * as React from 'react';
import './index.css'

interface PropsType {
  open: boolean;
  label: string;
}
export const DebugFlag = ({open, label}: PropsType) => {
  if (!open) {
    return null;
  }
  return <div className="root">{label}</div>;
};

DebugFlag.defaultProps = {
  open: true,
  label: 'DEBUG'
}
