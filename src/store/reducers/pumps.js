import * as actionTypes from "../actions/actionTypes";

const initialState = {
  pumps: [],
  selectedPump: [],
  isChecked: false
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PUMPS_FETCH_SUCCESS:
      return {
        ...state,
        pumps: action.value,
      };
    case actionTypes.SORT_HANDLER:
      const sortData = () => {
        const sortByValue = action.value;
        const pumps = [...state.pumps];
        if (sortByValue) {
          const sortCallBack = (a, b) => {
            return a.properties
              .filter((el) => el.id === sortByValue)[0]
              .value.localeCompare(
                b.properties.filter((el) => el.id === sortByValue)[0].value,
                navigator.languages[0] || navigator.language,
                { numeric: true, ignorePunctuation: true }
              );
          };
          const newPumps = pumps.sort(sortCallBack);
          return newPumps;
        } else {
          return pumps;
        }
      };
      return {
        ...state,
        pumps: sortData(),
      };
    case actionTypes.SELECTED_PUMP:
      const selection = state.pumps.filter((el) => {
        return el.id === action.id;
      });
      return {
        ...state,
        selectedPump: selection,
      };
    case actionTypes.FILTER_PUMP:
      const filtered = state.pumps.filter((el) => {
        return el.category.includes(action.cat)
      })
      if(state.isChecked) {
        return {
          ...state,
          pumps: state.keepOriginal,
          isChecked: !state.isChecked
        }
      } else {
        return {
          ...state,
          pumps: filtered,
          keepOriginal: state.pumps,
          isChecked: !state.isChecked
        }
      }
    default:
      break;
  }
  return state;
};
export default reducer;