import React from 'react';

export default function useSnackBarState() {
  const [visible, setVisible] = React.useState(false);

  function onDismissSnackBar() {
    setVisible((visible) => false);
  }
  function showSnackBar() {
    setVisible((visible) => true);
  }

  return {
    visible,
    setVisible,
    showSnackBar,
    onDismissSnackBar,
  };
}
