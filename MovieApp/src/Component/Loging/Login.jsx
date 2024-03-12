import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Login.css'
function Login(){
    function handleClick(){
        alert("Login Successful")
        
    }
    
        return(
            <>
                <div className="signIn">
                    <div className="signInDiv">
                        <p>Enter your email address to sign in</p>
                        <input type="text" name="email" placeholder="Email address"/>
                        <input type="password" name="pass" placeholder="Password" />
                        <Link to="/"><button onClick={handleClick}>Continue</button></Link>
                        <Link className='create' to='/createaccount'><p style={{color:"#fff"}}>Create an account</p></Link>
                    </div>
                </div>
                
            </>
        )

}

export default Login