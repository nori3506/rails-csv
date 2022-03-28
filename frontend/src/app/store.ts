import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import UsersReducer from "../features/users/userSlice";

export const store = configureStore({
  reducer: {
    users: UsersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
