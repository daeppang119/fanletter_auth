import Layout from "Layout/Layout";
import axios from "axios";
import Detail from "pages/Detail/Detail";
import Home from "pages/Home";
import Login from "pages/Login";
import Profile from "pages/Profile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { login } from "redux/modules/authSlice";

function Router() {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
}

function InnerRouter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => {
    return state.auth.isAuth;
  });

  const userTokenCheck = async () => {
    const accessToken = localStorage.getItem("accessToken");

    // 일단.. 토근없으면... 그냥 리턴하는걸로..
    if (!accessToken) {
      alert("토큰 정보가 없습니다.");
      return;
    }

    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/user`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        }
      });

      dispatch(login(response.data));
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
      console.log(error.response.data.message);
      navigate("/login");
    }
  };

  useEffect(() => {
    userTokenCheck();
  }, []);

  return (
    <Routes>
      <Route element={isAuth ? <Layout /> : <Navigate to="/login" />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Router;
