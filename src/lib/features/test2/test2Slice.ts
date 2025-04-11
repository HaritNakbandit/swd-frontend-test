import { createSlice, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Test2State {
  userInfo: UserInfo;
  userInfoList: UserInfo[];
}

export interface UserInfo {
  key: React.Key;
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  birthDay: string;
  nationally: string;
  citizenID: string;
  gender: string;
  countyCode: string;
  mobileNumber: string;
  passportNo: string;
  expectSalary: string;
}

const initialState: Test2State = {
  userInfo: {
    key: "",
    id: "",
    title: "",
    firstName: "",
    lastName: "",
    birthDay: "",
    nationally: "",
    citizenID: "",
    gender: "",
    countyCode: "",
    mobileNumber: "",
    passportNo: "",
    expectSalary: "",
  },
  userInfoList: [],
};

export const test2Slice = createSlice({
  name: "test2",
  initialState,
  reducers: {
    createUser: (state, action: PayloadAction<UserInfo>) => {
      const list = state.userInfoList;
      list.push(action.payload);
      localStorage.setItem("dataList", JSON.stringify(list));
      alert("Save Success");
    },
    updateUser: (state, action: PayloadAction<UserInfo>) => {
      const list = current(state.userInfoList);
      const newList = list.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload };
        }
        return item;
      });
      state.userInfoList = newList;
      localStorage.setItem("dataList", JSON.stringify(newList));
      alert("Save Success");
    },
    getUserList: (state) => {
      if (localStorage.getItem("dataList")) {
        const storeList = JSON.parse(localStorage.getItem("dataList") ?? "");
        state.userInfoList = storeList;
      }
    },
    selectUser: (state, action: PayloadAction<string>) => {
      const list = current(state.userInfoList);
      const data = list?.find((item) => item.id === action.payload);
      if (data) {
        state.userInfo = data;
      }
    },
    deleteUser: (state, action: PayloadAction<React.Key[]>) => {
      const list = current(state.userInfoList);
      const newList = list.filter(
        (value) => !action.payload.includes(value.id)
      );
      state.userInfoList = newList;
      localStorage.setItem("dataList", JSON.stringify(newList));
      alert("Delete Success");
    },
    clearUser: (state) => {
      state.userInfo = initialState.userInfo;
    },
  },
});

export const {
  createUser,
  selectUser,
  getUserList,
  clearUser,
  updateUser,
  deleteUser,
} = test2Slice.actions;

export default test2Slice.reducer;
