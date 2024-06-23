export const fadeIn = (direction: string, delay: number) => {
  let x = 0;
  let y = 0;
  
  if (direction === 'up') y = 100;
  if (direction === 'down') y = -100;
  if (direction === 'left') x = 100;
  if (direction === 'right') x = -100;
  
  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        type: 'spring',
        stiffness: 50,
      },
    },
  };
};