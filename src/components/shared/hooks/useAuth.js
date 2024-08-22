// import { useSelector } from "react-redux/es/hooks/useSelector";
// import { isAuth, isGoogleAuth } from "../../redux/auth/auth-selectors";

// const useAuth = () => {
//     const isLogin = useSelector(isAuth);
//     const isGoogleLogin = useSelector(isGoogleAuth);

//     return isLogin || isGoogleLogin;
// };

// export default useAuth;


import { useSelector } from "react-redux/es/hooks/useSelector";
import { isGoogleAuth, isGithubAuth } from "../../redux/auth/auth-selectors";

const useAuth = () => {
    const isGoogleLogin = useSelector(isGoogleAuth);
    const isGithubLogin = useSelector(isGithubAuth);

    return isGoogleLogin || isGithubLogin;
};

export default useAuth;
