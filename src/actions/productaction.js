import axios from "axios";
import { GET_ERRORS,GET_PRODUCT } from "./types";


export const getProduct = () => (dispatch) => {
    
    axios
      .get("/product")
      .then((res) => {
          dispatch({
            type: GET_PRODUCT,
            payload: res.data,
          })
      }) 
      .catch((err) =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data,
        })
      );
  };