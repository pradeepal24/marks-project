import useStore from "../store/store";
import { useNavigate } from "react-router-dom";

function Login() {
    const { username, handleChangeUsername, toggleLoggedIn } = useStore();
    const navigate = useNavigate();

    function Submit() {
        if (username === "abc") {
            toggleLoggedIn(); 
            navigate("/marks-project/marks");
        }
        else {
            window.alert(`enter Valid Email`);
            navigate("/marks-project");
        }
        
    }

    return (
        <div >
            <h1 className="border-2 text-9xl text-amber-600 border-amber-50" >User Login</h1>
            <h3>Username</h3>
            <input 
                placeholder="name"
                onChange={handleChangeUsername} 
            />
            <button onClick={Submit}>Login</button>
        </div>
    );
}

export default Login;
