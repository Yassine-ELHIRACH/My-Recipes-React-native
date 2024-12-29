import React from 'react';

export default function useToggleMenu() {
  const [isMenuShown, setIsMenuShown] = React.useState(false);

  function openMenu() {
    setIsMenuShown(true);
  }
  function closeMenu() {
    setIsMenuShown(false);
  }

  return {
    isMenuShown,
    setIsMenuShown,
    openMenu,
    closeMenu,
  };
}
