import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Film() {
 
    let id = useParams()
    // console.log(typeof id.id)
    let id2 = parseInt(id.id)
    // console.log(typeof id2)
    let [film, setFilm] = useState({});
    async function getFilm(){
        await fetch(`http://localhost:5000/films/${id2}`)
        .then((response) => response.json())
        .then((returnedFilm) => {
            console.log(returnedFilm)
            setFilm(returnedFilm);
            //setFilms(returnedFilms.results)
        })
    }

useEffect(() => {
    getFilm()
}, [])

    return(
<h1>{film?.fields?.title}</h1>
    )
}
export default Film