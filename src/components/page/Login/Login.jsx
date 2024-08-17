// import { supabase } from "../../../client";
// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import { setUser, clearUser } from "../../redux/auth/authSlice";
// import { useDispatch } from "react-redux";

// const Login = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();

//   useEffect(() => {
//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       async (event, session) => {
//         if (event === "SIGNED_IN") {
//           dispatch(setUser(session.user));
//           navigate("/");
//         } else if (event === "SIGNED_OUT" || !session) {
//           dispatch(clearUser());
//           navigate("/login");
//         }
//       }
//     );

//     return () => {
//       authListener.subscription.unsubscribe();
//     };
//   }, [dispatch, navigate]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <Auth
//           supabaseClient={supabase}
//           appearance={{ theme: ThemeSupa }}
//           theme="dark"
//           providers={["github", "google"]}
//         />
//       </header>
//     </div>
//   );
// };

// export default Login;

import { supabase } from "../../../client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUser, clearUser } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const queryParams = new URLSearchParams(hash.substring(1));
      const token = queryParams.get("access_token");

      if (token) {
        window.history.replaceState(null, null, window.location.pathname);
        navigate("/");
      }
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
          dispatch(setUser(session.user));
          navigate("/");
        } else if (event === "SIGNED_OUT" || !session) {
          dispatch(clearUser());
          navigate("/login");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <header className="App-header">
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={["github", "google"]}
        />
      </header>
    </div>
  );
};

export default Login;
