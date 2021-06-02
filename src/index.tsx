import * as React from 'react';

interface PropsType {
  open: boolean;
  label: string;
}
export const DebugFlag = ({open, label}: PropsType) => {
  if (!open) {
    return null
  }
  return (
    <div style={{
      background: "red",
      position: "fixed",
      color: "white",
      transform: "rotate(45deg)",
      fontFamily: "system-ui, serif",
      width: "100px",
      textAlign: "center",
      right: "-23px",
      top: "18px",
      zIndex: 9999
    }}>{label}</div>
  )
};

DebugFlag.defaultProps = {
  open: true,
  label: 'DEBUG'
}
