import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Films() {


let [films, setFilms] = useState([])
let navigate = useNavigate();


async function getFilms(){
    await fetch('http://localhost:5000/films', {
        method: 'GET',    
        withCredentials: true,    
        crossorigin: true
    })
    .then((response) => response.json())
    .then((returnedFilms) => {
        console.log(returnedFilms);
        setFilms(returnedFilms)
    })
}
let id;
function handleClick(film) {
    console.log('in handle click', film.pk)
    let id = film.pk
    navigate(`/film/${id}`)
}

const getIdFromUrl = (entityName, url) => {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    console.log(matches[1])
    return matches[1]
  }

useEffect(() =>{
    getFilms()
}, [])
    
    return (
        <>
        <h3>Show films here</h3>
        {films.map((film) => 
        <li onClick={()=> handleClick(film)}>{film.fields.title}</li>)}
        </>
    )
}

export default Films