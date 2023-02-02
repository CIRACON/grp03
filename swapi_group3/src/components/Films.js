import {useState, useEffect} from 'react'

function Films() {


const [films, setFilms] = useState([])


async function getFilms(){
    await fetch('http://swapi.dev/api/films')
    .then((response) => response.json())
    .then((returnedFilms) => {
        console.log(returnedFilms.results)
        setFilms(returnedFilms.results[0])
      
    })
}

useEffect(() =>{
    getFilms()
}, [])

    return (
        <>
        <h3>Show films here</h3>
        <h3>JSON.stringify({films})</h3>
        </>
    )
}

export default Films