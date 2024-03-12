import { useState,useEffect } from "react"
import Homes from "./Homes"
import UpComing from "../UpComing/UpComing"
import Trending from "../Trending/Trending"

function HomePages(){
    const [upcoming,setUpcoming] = useState([])
    const [item,setItem] = useState([])
    const [recomded,setRecomded] = useState([])

    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        try {
            let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=5891d7dbfadaaa93fc210c3f6b289ce4`)
        let finalData = await res.json()
        setUpcoming(finalData?.results)

            let res2 = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5891d7dbfadaaa93fc210c3f6b289ce4`)
            finalData = await res2.json()

            let res3 = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=5891d7dbfadaaa93fc210c3f6b289ce4`)
            finalData = await res3.json()
            setRecomded(finalData?.results)
            setItem(finalData?.results)
        } catch (error) {
           console.log(error) 
        }
        
    }
    return(
        <div>
            <Homes/>
            <UpComing upcoming={upcoming} title="UpComming Movies"/>
            <UpComing upcoming={item} title="Latest Movies"/>
            <Trending/>
            <UpComing upcoming={recomded} title="Recomded Movies For You"/>
        </div>
    )
}

export default HomePages