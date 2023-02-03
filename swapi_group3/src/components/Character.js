import {useParams, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Character() {
    let navigate = useNavigate()
    let id = useParams()
    // console.log(typeof id.id)
    let id2 = parseInt(id.id)
    // console.log(typeof id2)
    let [character, setCharacter] = useState({});
    
    async function getCharacter(){
        const res = await fetch(`http://localhost:5000/people/${id2}`)
        const json = await res.json();
        console.log(json);
        setCharacter(json);
        // .then((response) => response.json())
        // .then((p) => {
        //     setPlanet(p);
        //     console.log(p);
        //     //setFilms(returnedFilms.results)
        // })
    }

    function handlePlanetClick(planet) {
        console.log(planet)
        navigate(`/planet/${planet}`)
    }

useEffect(() => {
    getCharacter()
}, [])


    console.log(character);
    return(
        <>
        <h1>{character?.fields?.name}</h1> 
        <p>Weight: {character?.fields?.mass} lbs</p>
        <p>Gender: {character?.fields?.gender}</p>
        <p>Eye Color: {character?.fields?.eye_color}</p>
        <b><p onClick={() => handlePlanetClick(character?.fields?.homeworld)}>Homeworld: {character?.fields?.homeworld}</p></b>
        </>
    )
}
export default Character