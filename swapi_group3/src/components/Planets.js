import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar, List} from 'antd'

function Planets() {


let [planets, setPlanets] = useState([])
let navigate = useNavigate();


async function getPlanets(){
    await fetch('http://localhost:5000/planets', {
        method: 'GET',    
        withCredentials: true,    
        crossorigin: true
    })
    .then((response) => response.json())
    .then((p) => {
        console.log(p)
        setPlanets(p)
    })
}
let id;
function handleClick(planet) {
    console.log('in handle click', planet.pk)
    let id = planet.pk
    navigate(`/planet/${id}`)
}

const getIdFromUrl = (entityName, url) => {
    const re = new RegExp(`.*${entityName}\/(\\d+).*`);
    const matches = url.match(re)
    if (!matches) throw `Bad URL. Not a ${entityName} URL.`
    console.log(matches[1])
    return matches[1]
  }

useEffect(() =>{
    getPlanets()
}, [])
    
    return (
        <>
        <h1>List of Planets</h1>
        {/* <h3>Show planets here</h3>
        {planets.map((planet) => 
        <li onClick={()=> handleClick(planet)}>{planet.fields.name}</li>)} */}
        <List
    itemLayout="horizontal"
    dataSource={planets}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          title={<a onClick={()=> handleClick(item)}>{item.fields.name}</a>}
          description={item.fields.population}
        />
      </List.Item>
    )}
  />
        </>
    )
}

export default Planets