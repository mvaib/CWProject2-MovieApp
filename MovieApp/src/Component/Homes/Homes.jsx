import { useEffect, useState } from "react"
import Home from "./Home"
import "./Home.css"
function Homes(){
    const [items,setItems] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,seterror] = useState(false)

    useEffect(()=>{
        getData()
    },[])
    async function getData(){
        setLoading(true)
        try {
            let res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=5891d7dbfadaaa93fc210c3f6b289ce4`)
            let finalData = await res.json()
            setItems(finalData?.results)
            setLoading(false)
            seterror(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
            seterror(true)
        }
    }
    return(
       <>
        <section className="home">
            <Home items={items}/>
        </section>
        <div className="margin"></div>
       </>
    )
}

export default Homes