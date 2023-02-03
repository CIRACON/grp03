import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

function Planet() {
 
    let id = useParams()
    // console.log(typeof id.id)
    let id2 = parseInt(id.id)
    // console.log(typeof id2)
    let [planet, setPlanet] = useState({});
    
    async function getPlanet(){
        const res = await fetch(`http://localhost:5000/planets/${id2}`)
        const json = await res.json();
        console.log(json);
        setPlanet(json);
        // .then((response) => response.json())
        // .then((p) => {
        //     setPlanet(p);
        //     console.log(p);
        //     //setFilms(returnedFilms.results)
        // })
    }

useEffect(() => {
    getPlanet()
}, [])


    console.log(planet);
    return(
        <h1>{planet?.fields?.name}</h1>
    )
}
export default Planet