function UpComingCad({title,poster_path}){
    return(
        <>
            <div className="MovieBox">
                <div className="img">
                    <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                </div>
                <div className="text">
                    <h3>{title}</h3>
                    <span>2hr : 40mins</span>
                    <button className="primary-btn">
                        <i className="fa fa-play"></i>PLAY NOW
                    </button>
                </div>
            </div>
        </>
    )
}

export default UpComingCad