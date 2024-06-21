
import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout, current } from "./auth-operations";

const initialState = {
    user: {},
    isLogin: false,
    token: "",
    loading: false,
    error: null,
    // googleUser: JSON.parse(localStorage.getItem("googleUser")) || null,
    googleUser: {
        name: "",
        email: "",
    },
    isGoogleLogin: false,

};

const checkLocalStorage = () => {
    const storedGoogleUser = localStorage.getItem("googleUser");
    const storedIsGoogleLogin = localStorage.getItem("isGoogleLogin");

    return {
        googleUser: storedGoogleUser ? JSON.parse(storedGoogleUser) : initialState.googleUser,
        isGoogleLogin: storedIsGoogleLogin ? JSON.parse(storedIsGoogleLogin) : initialState.isGoogleLogin,
    };
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        ...initialState,
        ...checkLocalStorage(),
    },
    reducers: {
        // googleLoginSuccess: (state, action) => {
        //   state.isGoogleLogin = true;
        //   state.googleUser = action.payload;
        //   localStorage.setItem("googleUser", JSON.stringify(action.payload));
        //   localStorage.setItem("isGoogleLogin", true);
        // },
        googleLoginSuccess: (state, action) => {
            state.isGoogleLogin = true;
            if (action.payload.data && action.payload.data.name) {
                state.googleUser = {
                    name: action.payload.data.name,
                    email: action.payload.data.email,
                };
                localStorage.setItem(
                    "googleUser",
                    JSON.stringify(state.googleUser)
                );
                localStorage.setItem("isGoogleLogin", true);
            }
        },
        googleLogout: (state) => {
            state.isGoogleLogin = false;
            state.googleUser = null;
            localStorage.removeItem("googleUser");
            localStorage.removeItem("isGoogleLogin");
        },
    },
    extraReducers: {
        [signup.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [signup.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [signup.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [login.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        },
        [login.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [logout.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled]: (state) => {
            state.loading = false;
            state.user = {};
            state.token = "";
            state.isLogin = false;
            state.googleUser = null;
            state.isGoogleLogin = false;
            localStorage.removeItem("googleUser");
            localStorage.removeItem("isGoogleLogin");
        },
        [logout.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        [current.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [current.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.user = payload;
            state.token = payload.token;
            state.isLogin = true;
        },
        [current.rejected]: (state, { payload }) => {
            state.loading = false;
            state.token = "";
            state.error = payload;
        },
    },
});

export const { googleLoginSuccess, googleLogout } = authSlice.actions;
export default authSlice.reducer;





