import Logo from '/eye-svgrepo-com.svg'
import './Header.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useState } from 'react'
function Header(){
    const [mobile,setMobile] = useState(false)
    return(
        <header>
            <div className='container flexSB'>
                <nav className='flexSB'>
                    <Link to='/'><div className='logo'>
                        <img src={Logo} alt="" />
                    </div>
                    </Link>
                    <ul className={mobile ? 'navMenu-list' : 'flexSB'} onClick={()=>setMobile(false)}>
                        <Link to="/">Home</Link>
                        <Link to="/series">Series</Link>
                        {/* <Link to="/movies">Movies</Link> */}
                    </ul>
                    <button className='toogle' onClick={()=>setMobile(!mobile)}>
                        {mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
                <div className='account flexSB'>
                    <i id='search' className='fa fa-search'></i>
                    <i id='bell' className='fa fa-bell'></i>
                    <Link to="/login"><i className='fa fa-user'></i></Link>
                    <button>Suscribe Now</button>
                </div>
            </div>
        </header>
    )
}

export default Header