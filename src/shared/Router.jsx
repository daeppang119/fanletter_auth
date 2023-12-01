import Layout from "Layout/Layout";
import axios from "axios";
import Detail from "pages/Detail/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export default function Router() {
  // const [isAuth, setIsAuth] = useState(false);

  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  const userTokenCheck = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(`${process.env.REACT_APP_URL}/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    });
    console.log(response.data);
  };

  useEffect(() => {
    userTokenCheck;
  }, []);

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
