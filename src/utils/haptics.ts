export const haptic = (duration: number) => {
  if ('vibrate' in navigator) {
    navigator.vibrate(duration);
  }
};

export const haptics = {
  light: () => haptic(10),
  medium: () => haptic(20),
  strong: () => haptic(50),
};
