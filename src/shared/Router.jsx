import Layout from "Layout/Layout";
import Detail from "pages/Detail/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
  // const [isAuth, setIsAuth] = useState(false);
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });
  console.log(isAuth);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={isAuth ? <Layout /> : <Navigate to="/login" />}>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
