import {GET_PRODUCT} from "../actions/types";


  const initialState = {
    products:[]
  };
  export default function product(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCT:
        return {
          ...state,
         products:action.payload
        };
      default:
        return state;
    }
  }
