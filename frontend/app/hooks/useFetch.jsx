import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { api_url } from "../../App";
import Cookies from "js-cookie";

const useFetch = () => {
  const {
    authTokens,
    refreshToken,
    setAuthTokens,
    setUser,
  } = useContext(AuthContext); // Fix: Change linebreak to LF

  const config = {};

  const originalRequest = async (url, config) => {
    // console.log("Original Request");how
    url = `${api_url}${url}`;
    const response = await fetch(url, config);
    const data = await response.json();
    // console.log("REQUESTING:", data);

    return { response, data };
  };

  const refreshAccessToken = async () => {
    // console.log("Refresh Tokens");
    const response = await fetch(`${api_url}/auth/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: refreshToken }),
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log("New tokens set");
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      Cookies.set("authTokens", JSON.stringify(data));
      // localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      alert("Error getting tokens.");
    }

    return data;
  };

  const callFetch = async (url, method) => {
    // console.log("Call Fetch");
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) <= 1;

    if (isExpired) await refreshAccessToken();

    // console.log(Cookies.get("authTokens"));

    // Using authtokens from storage because state authTokens take time to update
    config["method"] = method;
    config["headers"] = {
      Authorization: `Bearer ${
        JSON.parse(Cookies.get("authTokens"))?.access
        // JSON.parse(localStorage.getItem("authTokens"))?.access
      }`,
    };

    const { response, data } = await originalRequest(url, config);

    return { response, data };
  };

  return callFetch;
};

export default useFetch;
