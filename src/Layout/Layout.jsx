import { useDispatch } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout } from "redux/modules/authSlice";

function Layout() {
  const dispatch = useDispatch();

  return (
    <>
      <nav>
        <Link to="/">HOME</Link>
        <section>
          <Link to="/profile">프로필</Link>
          <button
            onClick={() => {
              dispatch(logout());
            }}
          >
            로그아웃
          </button>
        </section>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
