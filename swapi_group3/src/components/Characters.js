import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


function Characters(){

    let [people, setPeople] = useState([])

    async function getPeople(){
        await fetch('http://swapi.dev/api/people')
        .then((response) => response.json())
        .then((returnedPeople) => {
            console.log(returnedPeople.results)
           // setFilms(returnedFilms.results)
        })
    }

    useEffect(()=>{
        getPeople()
    },[])

    return (
        <>
        <h1>Star Wars Universe Lookup</h1>
        <h3>Who are you looking for? </h3>
        </>
    )
}

export default Characters