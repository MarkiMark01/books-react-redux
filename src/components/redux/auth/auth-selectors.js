export const isGoogleAuth = ({ auth }) => auth.isGoogleLogin;
export const getGoogleUser = ({ auth }) => auth.googleUser;

export const isGithubAuth = ({ auth }) => auth.isGithubLogin;
export const getGithubUser = ({ auth }) => auth.githubUser;