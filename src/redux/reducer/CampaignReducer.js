import { IS_SIDE_BAR, SET_HEADING, SET_TYPE } from "../actions/CampaignActions";


const initialState = {
  type: 'compaign types',
  heading: 'Select Campaign Type',
  isSideBar: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case SET_HEADING:
      return {
        ...state,
        heading: action.payload,
      };
      case IS_SIDE_BAR:
      return {
        ...state,
        isSideBar: !state.isSideBar,
      };
    default:
      return state;
  }
};

export default reducer;
