import { useRef } from 'react';

const useDisclosureState = (key: string) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  let isDefaultOpen = true;
  if (typeof window !== 'undefined' && localStorage.getItem(key)) {
    isDefaultOpen = localStorage.getItem(key) === 'true';
  }

  const onDisclosureButtonClick = () => {
    const isOpen =
      btnRef?.current?.getAttribute('data-expanded') === 'false'
        ? 'true'
        : 'false';
    localStorage.setItem(key, isOpen);
  };

  return {
    isDefaultOpen,
    btnRef,
    onDisclosureButtonClick,
  };
};

export default useDisclosureState;
