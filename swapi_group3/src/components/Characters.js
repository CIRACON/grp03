import {useState, useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


function Characters(){
 
    let navigate = useNavigate()
    

    // async function getPeople(){
    //     await fetch('http://localhost:5000/people', {
    //         method: 'GET',    
    //         withCredentials: true,    
    //         crossorigin: true
    //     })
    //     .then((response) => response.json())
    //     .then((p) => {
    //         console.log(p)
    //         setPeople(p)
    //     })
    // }


    return (
      <>
        <h1>Star Wars Universe Lookup</h1>
        <h3>What are you looking for?</h3>
        <button onClick={()=>navigate('/films')}>Click for Films</button> 
        <button onClick={()=>navigate('/planets')}>Click for Planets</button>

        </>

    )
}

export default Characters