// Action types

export const INCREASE_NUMBER = "INCREASE_NUMBER";

// Action creators

export const increaseNumber = (amount = 1) => {
  return { type: INCREASE_NUMBER, amount };
};
