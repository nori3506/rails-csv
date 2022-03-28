import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import produce from "immer";
import { createUsers, fetchUsers } from "./userAPI";
import { RootState } from "../../app/store";

export enum Statuses {
  Initial = "Not Fetched",
  Loading = "Loading...",
  UpToDate = "Up TO Date",
  Delted = "Deleted",
  Error = "Error",
}

export interface UserState {
  id?: number;
  name: string;
  age?: number;
  gender?: boolean;
  hobby?: string;
  created_at?: any;
  updated_at?: any;
}

export interface UserFormData {
  user: {
    id?: string;
    name: string;
    age: number;
    gender: number;
    hobby: string;
  };
}

export interface UsersState {
  users: UserState[];
  status: string;
}

const initialState: UsersState = {
  users: [
    {
      id: 0,
      name: "",
      age: 0,
      gender: true,
      hobby: "",
      created_at: "",
      updated_at: "",
    },
  ],
  status: Statuses.Initial,
};

export const fetchUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const response = await fetchUsers();
    return response;
  }
);

export const createUserAsync = createAsyncThunk(
  "users/createUser",
  async (payload: any) => {
    const response = await createUsers(payload);
    return response;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          draftState.users = action.payload;
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      })
      .addCase(createUserAsync.pending, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Loading;
        });
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        return produce(state, (draftState) => {
          action.payload.users.forEach((user: UserState) =>
            draftState.users.push(user)
          );
          draftState.status = Statuses.UpToDate;
        });
      })
      .addCase(createUserAsync.rejected, (state) => {
        return produce(state, (draftState) => {
          draftState.status = Statuses.Error;
        });
      });
  },
});

export const {} = userSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;

export const selectStates = (state: RootState) => state.users.status;
export default userSlice.reducer;
