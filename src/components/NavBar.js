import { Link, Outlet, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";
import { getAuth, signOut } from "firebase/auth";

const NavBar = () => {
    const { user } = useUser();
    const navigate = useNavigate();

    return (<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">My React Blog</span>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li>
                        {user
                            ? <button className="btn btn-outline-dark" onClick={() => signOut(getAuth())}>Log Out</button>
                            : <button className="btn btn-outline-dark" onClick={() => navigate('/login')}>Log In</button>}
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </div>)

};

export default NavBar;