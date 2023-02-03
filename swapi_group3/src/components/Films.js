import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {Avatar, List, Space} from 'antd'
import Planets from './Planets';

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
    films.sort((a, b) => {
        return a.fields.episode_id - b.fields.episode_id;
    })
    const imgUrl = (filmID) => {
        return `images/swapi${filmID}.jpg`;
    }
    return (
        <>
        <h1>List of All GOOD Star Wars Films</h1>
        {/* <h3>Show films here</h3>
        {films.map((film) => 
        <li onClick={()=> handleClick(film)}>{film.fields.title}</li>)} */}
        <List
    itemLayout="vertical"
    size="large"
    dataSource={films}
    footer={
      <div>
        <b>So Good</b>
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.fields.title}
        actions={[]}
        extra={
          <img
            width={272}
            alt="logo"
            src={imgUrl(item.fields.episode_id)}
          />
        }
      >
        <List.Item.Meta
          title={<a onClick={()=> handleClick(item)}>{item.fields.title}</a>}
          description={item.fields.episode_id}
        />
        {item.fields.opening_crawl}
      </List.Item>
    )}
  />
        </>
    )
}

export default Films