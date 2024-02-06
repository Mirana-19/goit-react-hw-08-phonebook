import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },

  extraReducers: builder => {
    builder

      .addCase(logoutUser.fulfilled, state => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addMatcher(
        isAnyOf(registerUser.fulfilled, loginUser.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      );
  },
  selectors: {
    selectUser: state => state.user,
    selectIsLoggedIn: state => state.isLoggedIn,
    selectIsRefreshing: state => state.isRefreshing,
  },
});

export const authReducer = slice.reducer;
export const { selectIsLoggedIn, selectIsRefreshing, selectUser } =
  slice.selectors;
