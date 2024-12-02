import { getRequest, postRequest, putRequest } from "../hooks/apiRequests";
import { CreateFormData } from "../hooks/createFormData";

export const LoginUser = async (payload) => {
  return await postRequest("signin/client", payload);
};

export const RegisterUser = async (payload) => {
  return await postRequest("api/user/", payload);
};

export const fetchCategories = async () => {
  return await getRequest("api/category/", "");
};

export const fetchAllServices = async () => {
  return await getRequest("api/services", "");
};

export const fetchService = async (id) => {
  return await getRequest("api/services", id);
};

export const fetchServiceCategory = async () => {
  return await getRequest("api/category", "");
};

export const fetchUserDetails = async (id) => {
  console.log(id);
  return await getRequest("api/user", id);
};

export const SubmitOnboarding = async (payload) => {
  return await putRequest("api/user", CreateFormData(payload), payload.id);
};

export const CreateBankDetails = async (payload) => {
  return await postRequest("api/bank_details/", payload);
};

export const CreateSkills = async (payload) => {
  return await postRequest("api/skill/", payload);
};
