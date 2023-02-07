import {useState, useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'


function Characters(){
 
    let navigate = useNavigate()
    let [searchTerm, setSearchTerm] = useState('')
    let [people, setPeople] = useState([]) 
    let [searchPeople, setSearchPeople] = useState([])
    
    function handleSubmit(event) {
      event.preventDefault()
      console.log(searchTerm)
      filterPeople(people, searchTerm)
    }

    function handleClick(person) {
      let id = person.pk
      navigate(`/people/${id}`)
    }

    function filterPeople(arr, query) {
      console.log(arr)
      let results = arr.filter((el) => el.fields.name.toLowerCase().includes(query.toLowerCase()));
    setSearchPeople(results)
    }

    

     async function getPeople(){
        await fetch('http://localhost:5000/people', {
             method: 'GET',    
         withCredentials: true,    
             crossorigin: true
         })
         .then((response) => response.json())
         .then((p) => {
             console.log(p)
             setPeople(p)
         })
     }

     useEffect(() => {
      getPeople()
      filterPeople(people, searchTerm)
     }, [searchTerm]) 


    return (
      <>
        <h1>Star Wars Universe Lookup</h1>
        <h3>What are you looking for?</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <button type="submit">Search</button>
        </form>
        
        {searchPeople.map((person)=>
        <p>{person.fields.name}</p>)}
        
        {people.map((person) =>
        <p onClick={()=>handleClick(person)}>{person?.fields?.name}</p>)}

        </>

    )
}

export default Characters