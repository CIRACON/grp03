import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Film() {
 
    let id = useParams()
    console.log(typeof id.id)
    let id2 = parseInt(id.id)
    console.log(typeof id2)

    async function getFilms(){
        await fetch(`http://swapi.dev/api/films/${id2}`)
        .then((response) => response.json())
        .then((returnedFilm) => {
            console.log(returnedFilm)
            //setFilms(returnedFilms.results)
        })
    }

useEffect(() => {
    getFilms()
}, [])

    return(
<h1>Film Goes Here</h1>
    )
}
export default Film