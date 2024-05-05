import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../shared/authApi";

export const signup = createAsyncThunk(
    'auth/signup',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signup(data);
            return result;
        } catch ({ response }) {
            const { status, data } = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
)