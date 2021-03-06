import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import taskReducer from '../features/task/TaskSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // reducerを一つにまとめるtaskはnameと同じにする
    task:taskReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
