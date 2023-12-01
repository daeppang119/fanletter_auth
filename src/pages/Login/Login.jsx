import React, { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isAuth } from "redux/modules/authSlice";

function Login() {
  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupId, setSignupId] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupNickName, setSignupNickName] = useState("");

  const [isLogin, setIsLogin] = useState(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (setLoginId && setLoginPassword !== undefined) {
      // setIsAuth(true)
      dispatch(isAuth(true));
      navigate("/");
    } else {
      alert("아이디 또는 패스워드를 확인해주세요!");
    }

    setLoginId("");
    setLoginPassword("");
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    if (setSignupId && setSignupPassword && setSignupNickName !== undefined) {
      setIsLogin(true);
    } else {
      alert("아이디 또는 패스워드를 확인해주세요!");
    }

    setSignupId("");
    setSignupPassword("");
    setSignupNickName("");
  };

  const handleGoSignup = () => {
    setIsLogin(false);
  };

  const handleGoLogin = () => {
    setIsLogin(true);
  };

  const isLoninActive = useMemo(() => {
    return loginId.length >= 4 && loginPassword.length >= 4;
  }, [loginId, loginPassword]);

  const isSignupActive = useMemo(() => {
    return (
      signupId.length >= 4 &&
      signupPassword.length >= 4 &&
      signupNickName.length >= 1
    );
  }, [signupId, signupPassword, signupNickName]);

  return (
    <>
      {isLogin === true ? (
        <form onSubmit={handleLoginSubmit}>
          <h2>로그인</h2>
          <label>아이디</label>
          <input
            type="text"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            minLength={4}
            maxLength={10}
            required
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            minLength={4}
            maxLength={15}
            required
          />
          <button type="submit" disabled={!isLoninActive}>
            로그인
          </button>
          <button onClick={handleGoSignup}>회원가입</button>
        </form>
      ) : (
        <form onSubmit={handleSignupSubmit}>
          <h2>회원가입</h2>
          <label>아이디</label>
          <input
            type="text"
            value={signupId}
            onChange={(e) => setSignupId(e.target.value)}
            minLength={4}
            maxLength={10}
            required
          />
          <label>비밀번호</label>
          <input
            type="password"
            value={signupPassword}
            onChange={(e) => setSignupPassword(e.target.value)}
            minLength={4}
            maxLength={15}
            required
          />
          <label>닉네임</label>
          <input
            type="text"
            value={signupNickName}
            onChange={(e) => setSignupNickName(e.target.value)}
            minLength={1}
            maxLength={10}
            required
          />
          <button type="submit" disabled={!isSignupActive}>
            회원가입
          </button>
          <button onClick={handleGoLogin}>로그인</button>
        </form>
      )}
    </>
  );
}

export default Login;
