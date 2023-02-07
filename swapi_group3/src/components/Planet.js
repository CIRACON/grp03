import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Planet() {
 
    let id = useParams()
    // console.log(typeof id.id)
    let id2 = parseInt(id.id)
    // console.log(typeof id2)
    let [planet, setPlanet] = useState({});
    const planetArr = JSON.parse(localStorage.getItem('planets'));

    async function getPlanet(){
        const res = await fetch(`http://localhost:5000/planets/${id2}`)
        const json = await res.json();
        //console.log(json);
        setPlanet(json);
        // .then((response) => response.json())
        // .then((p) => {
        //     setPlanet(p);
        //     console.log(p);
        //     //setFilms(returnedFilms.results)
        // })
    }

useEffect(() => {
    setPlanet(planetArr[id2-1]);
}, [])
    return(
        <>
        <h1>{planet?.fields?.name}</h1> 
        <p>Population: {planet?.fields?.population} inhabitants</p>
        <p>Climate: {planet?.fields?.climate}</p>
        <p>Terrain: {planet?.fields?.terrain}</p>
        <p>Orbital Period: {planet?.fields?.climate}</p>
        </>
    )
}
export default Planet