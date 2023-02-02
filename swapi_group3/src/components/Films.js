import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Films() {


const [films, setFilms] = useState([])
let navigate = useNavigate();


async function getFilms(){
    await fetch('http://swapi.dev/api/films')
    .then((response) => response.json())
    .then((returnedFilms) => {
        console.log(returnedFilms.results)
        setFilms(returnedFilms.results)
      
    })
}

const handleClick = () => {
    console.log('in handle click')
}

useEffect(() =>{
    getFilms()
}, [])

    return (
        <>
        <h3>Show films here</h3>
        {films.map((film) => 
        <li onClick={handleClick}>{film.title}</li>)}
        </>
    )
}

export default Films