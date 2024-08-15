export const getAuthError = ({ auth }) => auth.error || {};
export const isAuth = ({ auth }) => auth.isLogin;
export const getUser = ({ auth }) => auth.user;

export const isGoogleAuth = ({ auth }) => auth.isGoogleLogin;
export const getGoogleUser = ({ auth }) => auth.googleUser;