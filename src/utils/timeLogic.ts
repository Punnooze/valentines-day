// Set your start date here (YYYY-MM-DD format)
export const START_DATE = new Date('2026-02-08');

export const isEnvelopeUnlocked = (dayIndex: number): boolean => {
  const now = new Date();
  
  const unlockDate = new Date(START_DATE);
  unlockDate.setDate(unlockDate.getDate() + (dayIndex - 1));
  unlockDate.setHours(6, 0, 0, 0); // Unlock at 6 AM
  
  return now >= unlockDate;
};

export const getDaysUntilUnlock = (dayIndex: number): number => {
  const now = new Date();
  
  const unlockDate = new Date(START_DATE);
  unlockDate.setDate(unlockDate.getDate() + (dayIndex - 1));
  unlockDate.setHours(6, 0, 0, 0); // Unlock at 6 AM
  
  const diffTime = unlockDate.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
};
