import { useSelector } from "react-redux/es/hooks/useSelector";
import { isAuth, isGoogleAuth } from "../../redux/auth/authSelectors";

const useAuth = () => {
    const isLogin = useSelector(isAuth);
    const isGoogleLogin = useSelector(isGoogleAuth);

    return isLogin || isGoogleLogin;
};

export default useAuth;