import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";


 export const loginAuth = (email) => async dispatch => {
    try {
      const response = await axios.post(
        "https://dogbreed-api.q9.com.br/register",
        {
          email 
        }
      );
      console.log("responde", response)
      window.localStorage.setItem("token", response.data.user.token);
      dispatch(push(routes.list));
    } catch (e) {

    }
 }

 export default loginAuth
