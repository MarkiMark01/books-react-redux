import { useSelector } from "react-redux/es/hooks/useSelector";
import { isAuth } from "../../redux/auth/auth-selectors";

const useAuth = () => {

    const result = useSelector(isAuth);

    return result;
}
export default useAuth;