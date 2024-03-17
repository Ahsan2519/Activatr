export const SET_TYPE = 'SET_TYPE';
export const SET_HEADING = 'SET_HEADING';
export const IS_SIDE_BAR = 'IS_SIDE_BAR'

export const setType = (type) => ({
  type: SET_TYPE,
  payload: type,
});

export const setHeading = (heading) => ({
  type: SET_HEADING,
  payload: heading,
});

export const setSideBar = (value) => ({
  type: IS_SIDE_BAR,
  payload: value,
});
