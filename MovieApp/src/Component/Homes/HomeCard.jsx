import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Play from "../../assets/play.png"
import PlayBtn from "../../assets/play-button.png"
function HomeCard({id,title,poster_path,vote_average,release_date,overview,video}){
    return(
        <>
            <div className="box">
                <div className="coverImage">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                </div>
                <div className="content flex">
                    <div className="details row">
                        <h1>{title}</h1>
                        <div className="rating flex">
                            {vote_average >=10 ? <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </> : vote_average >=8 ? <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </> : vote_average >=6 ? <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </> : vote_average >=4 ? <>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </> : <i className="fas fa-star"></i>}
                        </div>
                        <label>{vote_average}</label>
                        <p className="date">{release_date}</p>
                        <p className="disc">{overview}</p>
                        <button className="primary-btn">
                            <i className="fas fa-play"></i> PLAY NOW
                        </button>
                    </div>
                    <div className="playButton row">
                        <Link>
                            <button>
                                <div className="img">
                                    <i className="fas fa-play"></i>
                                </div>
                                WATCH TRAILER
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}  

export default HomeCard