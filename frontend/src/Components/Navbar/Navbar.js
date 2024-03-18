import axios from "axios";

import './Navbar.css'
import { useNavigate } from "react-router-dom";


const Navbar = ({ setUserState, name }) => {

    const navigate = useNavigate();
    const logoutHandler = (e) => {
        e.preventDefault();

        axios.get("http://localhost:8000/user/logout/", {withCredentials: true}).then((res) => {
            setUserState({});
            sessionStorage.removeItem('user');
            navigate("/login", { replace: true });
        });
    };

    return (
    <>
        <div className="nav-bar-container-light">
            <img
            src="https://www.freeiconspng.com/thumbs/market-icons/market-stand-icon-1.png"
            className="website-logo"
            alt="website logo"
            />

            <a class="button" href="" onClick={logoutHandler}>
                <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg"/>
                <div class="logout">LOGOUT</div>
            </a>
        </div>
    </>
    )
};

export default Navbar