import axios from "axios";

export const loginService = (user) => {
  return axios({
    url: "https://681b23bf17018fe5057a3fd7.mockapi.io/login/register_login",
    method: "post",
    data: user
  });
};
