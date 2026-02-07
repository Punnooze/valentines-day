// Set your start date here (YYYY-MM-DD format)
export const START_DATE = new Date('2026-02-08');

export const isEnvelopeUnlocked = (dayIndex: number): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const unlockDate = new Date(START_DATE);
  unlockDate.setDate(unlockDate.getDate() + (dayIndex - 1));
  unlockDate.setHours(0, 0, 0, 0);
  
  return today >= unlockDate;
};

export const getDaysUntilUnlock = (dayIndex: number): number => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const unlockDate = new Date(START_DATE);
  unlockDate.setDate(unlockDate.getDate() + (dayIndex - 1));
  unlockDate.setHours(0, 0, 0, 0);
  
  const diffTime = unlockDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};
