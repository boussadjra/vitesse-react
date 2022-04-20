import { getUserNameAction, GET_USERNAME, setUserNameAction, SET_USERNAME } from "../actions";

let defaultState: string = '';
const userNameReducer = (state = defaultState, action:  getUserNameAction | setUserNameAction) => {
  switch (action.type) {

      case SET_USERNAME:
          state = action.payload;

          return state;

      case GET_USERNAME:
          return state;


      default:
  
          return state;
  }
};
export default  userNameReducer;