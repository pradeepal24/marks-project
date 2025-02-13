import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import  '../styles/nav.css'
export default function NavBar(){
    const navigate = useNavigate();
    const {username,isloggedIn} = useStore();
    return(
        <div className="container">
            <div>
                <ul>
                    
                    <li onClick={()=>navigate("/about")}>About</li>
                   {!isloggedIn && <li onClick={()=>navigate("/")}>Login</li>} 
                   {isloggedIn && <li>{username}</li>}
                </ul>
            </div>
            <div className="sign-btn">
                <button>Signup</button>
            </div>
        </div>
    )
}