import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Film() {
 
    let navigate = useNavigate()
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

    function handlePlanetClick(planet) {
        console.log(planet)
        navigate(`/planet/${planet}`)


    }
    function handlePersonClick(person) {
        console.log(person)
        navigate(`/people/${person}`)


    }
useEffect(() => {
    getFilm()
}, [])

    return(
        <>
<h1>{film?.fields?.title}</h1>
<p>Released: {film?.fields?.release_date}</p>
<p>Director: {film?.fields?.director}</p>
<p>Episode: {film?.fields?.episode_id}</p>
<h2>Characters</h2>
{film?.fields?.characters.map((character) =>
<p onClick={() => handlePersonClick(character)}>{character}</p>)}
<h2>Planets</h2>
{film?.fields?.planets.map((planet) =>
<p onClick={() => handlePlanetClick(planet)}>{planet}</p>)}
</>
    )
}
export default Film