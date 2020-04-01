import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

 export const  loginAuth = (email) => async dispatch => {
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


export const getListAction = (list) => ({
	type: "GET_LIST",
	payload: {
		list:list,
	}
})

const token = window.localStorage.getItem("token")

export const getList = () => async (dispatch) => {
	const response = await axios.get("https://dogbreed-api.q9.com.br/list",
		{
			headers: {Authorization:token}
		}
	)
	console.log(response.data.list)
  dispatch(getListAction (response.data.list))
}

export const getListHusky = () => async (dispatch) => {
	const response = await axios.get("https://dogbreed-api.q9.com.br/list/?breed=husky",
		{
			headers: {Authorization:token}
		}
	)
  dispatch(getListAction (response.data.list))
}

export const getListPug = () => async (dispatch) => {
	const response = await axios.get("https://dogbreed-api.q9.com.br/list/?breed=pug",
		{
			headers: {Authorization:token}
		}
	)
  dispatch(getListAction (response.data.list))
}

export const getListLabrador = () => async (dispatch) => {
	const response = await axios.get("https://dogbreed-api.q9.com.br/list/?breed=labrador",
		{
			headers: {Authorization:token}
		}
	)
  dispatch(getListAction (response.data.list))
}