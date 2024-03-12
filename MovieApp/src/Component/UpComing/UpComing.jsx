import { Link } from "react-router-dom/cjs/react-router-dom.min"
import UpComingCard from "./UpComingCard"
import { useEffect, useState } from "react"
import "./UpComing.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props){
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-chevron-right"></i>
            </button>
        </div>
    )
}
function SamplePrevArrow(props){
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-chevron-left"></i>
            </button>
        </div>
    )
}
function UpComing({upcoming,title}){
    const [settings,setSettings] = useState({
        dots: false,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        nextArrow:<SampleNextArrow/>,
        prevArrow:<SamplePrevArrow/>,
        responsive:[
            {
                breakpoint : 965,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                },
            }
        ],
    })


    return(
        <>
            <section className="upcome">
                <div className="container">
                    <div className="heading flexSB">
                        <h1>{title}</h1>
                        <Link to="/">View All</Link>
                    </div>
                    <div className="Content">
                        <Slider {...settings}>
                        {upcoming.map((item)=>(
                            <UpComingCard key={item.id} {...item}/>
                        ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UpComing