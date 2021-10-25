export const startAction = {
  type: "rotate",
  payload: true,
};

export const stopAction = {
  type: "rotate",
  payload: false,
};

export function reduxAction(type, payload) {
  return { type, payload };
}
