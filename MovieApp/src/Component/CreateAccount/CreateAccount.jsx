import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function CreateAccount(){
    function handleClick(){
        alert("Account Created Successfully")
        
    }
    
        return(
            <>
                <div className="signIn">
                    <div className="signInDiv">
                        <p>To Create Account Enter your email address</p>
                        <input type="text" name="email" placeholder="Email address"/>
                        <input type="password" name="pass" placeholder="Password" />
                        <input type="password" name="cpass" placeholder="Confirm Password" />
                        <Link to="/"><button onClick={handleClick}>Continue</button></Link>
                    </div>
                </div>
                
            </>
        )
}

export default CreateAccount