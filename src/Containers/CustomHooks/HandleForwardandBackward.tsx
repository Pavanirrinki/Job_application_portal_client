import { useState } from 'react';

const useMovement = (initialIndex = 0, items:number ) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const moveForward = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items);
  };

  const moveBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items- 1 : prevIndex - 1
    );
  };

  const reset = () => {
    setCurrentIndex(initialIndex);
  };

  return {
    currentIndex,
    currentItem: items,
    moveForward,
    moveBackward,
    reset,
  };
};

export default useMovement;
