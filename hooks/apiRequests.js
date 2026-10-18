import axios from "axios";
import localforage from "localforage";
// import { extractError } from "./extract-error";

export const appURL = `https://atodapi.up.railway.app/`;
export const baseURL = `https://atodapi.up.railway.app/`;
export const websiteURL = `https://atodapi.up.railway.app/`;

const redirectUser = async (response) => {
  let { origin } = window.location;
  let { pathname } = window.location;
  if (response.status === 401) {
    setTimeout(async () => {
      await localforage.clear();
      await window.localStorage.clear();
      if (pathname !== "/") return (window.location.href = `${origin}/`);
    }, 2000);
  }
};

const Headers = () => {
  const userToken = localStorage.getItem("userToken");
  if (userToken)
    return {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken") || ""}`,
      },
    };

  return {};
};

export const generalGetRequest = async (url, token) => {
  try {
    return await axios.get(url, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
  } catch (e) {
    console.log(e);
    if (e?.response.status === 401) return redirectUser(e?.response);
    // return ToastMessage("error", extractError(e?.response?.data));
  }
};

export const postRequest = async (endpoint, payload) => {
  try {
    return await axios.post(`${baseURL}${endpoint}`, payload, Headers());
  } catch (e) {
    console.log(e.message);
    if (e?.response.status === 401) return redirectUser(e?.response);
    // return ToastMessage("error", extractError(e?.response?.data));
  }
};

export const putRequest = async (endpoint, payload, id) => {
  try {
    return await axios.patch(
      `${baseURL}${endpoint}/${id || payload.id}/`,
      payload,
      Headers()
    );
  } catch (e) {
    console.log(e.message);
    if (e?.response.status === 401) return redirectUser(e?.response);
    // return ToastMessage("error", extractError(e?.response?.data));
  }
};

export const deleteRequest = async (endpoint, payload) => {
  try {
    return await axios.delete(`${baseURL}${endpoint}/${payload}`, Headers());
  } catch (e) {
    console.log(e);
    if (e?.response.status === 401) return redirectUser(e?.response);
    // return ToastMessage("error", e.message);
  }
};

export const getRequest = async (endpoint, payload) => {
  try {
    return await axios.get(
      `${baseURL}${endpoint}${payload ? "/" + payload : ""}`,
      Headers()
    );
  } catch (e) {
    console.log(e);
    if (e?.response.status === 401) return redirectUser(e?.response);
    // return ToastMessage("error", extractError(e?.response?.data));
  }
};
