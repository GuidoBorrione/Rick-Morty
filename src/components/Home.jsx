import React, { useEffect, useState} from 'react'
import { allCharacters } from '../api/api'
import { useParams } from 'react-router-dom' 

const Home = () => {
    const params = useParams()
    const [characters, setCharacter] = useState(null)
    useEffect(() => { 
        allCharacters(setCharacter)
        console.log(params)
        document.title  = "RickAndMorty";
    },[params])
        
        



  return (
    <>
    {characters? characters.data.result.map(
        (character)=>(
            character.name
        )
    )    : 'cargando'}
    </>
  )
}

export default Home
