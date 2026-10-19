import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchService,
  fetchServiceCategory,
  fetchUserDetails,
} from "../services/user-services";

export const getCategories = createAsyncThunk(
  "user/getCategories",
  async () => {
    try {
      return await fetchCategories().then((response) => response.data);
    } catch (e) {
      return e?.response;
    }
  }
);

export const getAllServices = createAsyncThunk(
  "user/getAllServices",
  async () => {
    try {
      return await fetchService().then((response) => response.data);
    } catch (e) {
      return e?.response;
    }
  }
);

export const getServiceList = createAsyncThunk(
  "user/getServiceList",
  async (id) => {
    try {
      return await fetchService(id).then((response) => response.data);
    } catch (e) {
      return e?.response;
    }
  }
);

export const getServiceCategories = createAsyncThunk(
  "user/getServiceCategories",
  async () => {
    try {
      return await fetchServiceCategory().then((response) => response.data);
    } catch (e) {
      return e?.response;
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "user/getUserDetails",
  async (id) => {
    if (id) {
      try {
        return await fetchUserDetails(id).then((response) => response.data);
      } catch (e) {
        return e?.response;
      }
    }
  }
);

const UserStore = createSlice({
  name: "userStore",
  initialState: {
    token: "",
    user: "",
    categories: "",
    services: "",
    service_list: "",
    service_category: "",
    activeService: "",
    onboardingForm: {},
    user_details: "",
  },
  reducers: {
    updateUserToken: (state, actions) => {
      state.token = actions.payload;
    },
    updateUser: (state, actions) => {
      state.user = actions.payload;
    },
    resetService: (state, actions) => {
      state.service_list = "";
    },
    updateActiveService: (state, actions) => {
      console.log(actions.payload);
      state.activeService = actions.payload;
    },
    updateOnboardingForm: (state, actions) => {
      state.onboardingForm = { ...state.onboardingForm, ...actions.payload };
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getCategories.fulfilled, (state, action) => {
    //   if (action.payload.status) state.categories = action.payload.data;
    // });

    builder.addCase(getAllServices.fulfilled, (state, action) => {
      if (action.payload.status) state.services = action.payload.data;
    });
    builder.addCase(getServiceList.fulfilled, (state, action) => {
      if (action.payload.status) state.service_list = action.payload.data;
    });
    // builder.addCase(getServiceCategories.fulfilled, (state, action) => {
    //   if (action.payload.status) state.service_category = action.payload.data;
    // });
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      if (action.payload.status) state.user_details = action.payload.data;
    });
  },
});
const { reducer } = UserStore;

export const {
  updateUserToken,
  updateUser,
  resetService,
  updateActiveService,
  updateOnboardingForm,
} = UserStore.actions;

export default reducer;
