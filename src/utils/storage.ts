const STORAGE_KEY = 'valentine_accepted';

export const hasAcceptedValentine = (): boolean => {
  return localStorage.getItem(STORAGE_KEY) === 'true';
};

export const setValentineAccepted = () => {
  localStorage.setItem(STORAGE_KEY, 'true');
};
