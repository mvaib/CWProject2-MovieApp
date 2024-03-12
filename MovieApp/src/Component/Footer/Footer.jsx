import React from 'react'
import './Footer.css'
function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="box">
                    <ul className="flex">
                        <li>Terms of Use</li>
                        <li>Privacy-Policy</li>
                        <li>FAQ</li>
                    </ul>
                    <p> © 2024. Vaibhav Mane .All rights reserved.</p>
                </div>
                <div className="box flexBox">
                    <h3>Follow Us</h3>
                    <div className='Flex'>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github"></i>
                    </div>
                </div>
                <div className="Box">
                    <h3>Watch It App</h3>
                    <div className="img flexSB">
                        <div className='appstore'>
                            <img src='https://img.icons8.com/color/48/000000/apple-app-store.png' alt="" />
                        </div>
                        <div className='playstore'>
                            <img src='https://img.icons8.com/color/48/000000/google-play.png' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer