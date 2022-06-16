export const inc = (state) => {
  return state + 1;
};

export const dec = (state) => {
  if (state === 0) {
    return 0;
  }
  return state - 1;
};

export const init = (payload) => {
  return parseInt(payload);
};
