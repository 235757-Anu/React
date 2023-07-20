import './Login.css'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function Login(){
    const navigate = useNavigate();
     return(
         <div className="container">
             <div className="login">
                 <div className="header">
                    LOGIN
                 </div>
                 <div className="inputs">
                     <input className="username" placeholder="Enter the username" />
                     <input className="password" placeholder="Enter the password" type='password' />
                 </div>
                 <div className="reg">
                    Don't have an account?<Link to='/signup'>Signup</Link>
                 </div>
                 <div style={{display: "flex",justifyContent: "center"}}>
                     <button className="submit" onClick={()=>navigate('/todo')}>Login</button>
                 </div>
             </div>
         </div>
     )
}


export default Login