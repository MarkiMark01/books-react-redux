import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/booksSlice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    books: booksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);

// import { configureStore } from "@reduxjs/toolkit";
// import {
//     persistReducer, persistStore,
//     FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER
// } from "redux-persist";
// import storage from 'redux-persist/lib/storage';

// import authReducer from './auth/auth-slice';
// import booksReducer from "./books/booksReducers";

// const persistConfig = {
//     key: "token",
//     storage,
//     whitelist: ['token']
// }

// const persistedReducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//     reducer: {
//         auth: persistedReducer,
//         // auth: authReducer,
//         books: booksReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//                 ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }),
// });
// export const persistor = persistStore(store);
