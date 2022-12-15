import axios from "axios";

const allCharacters = async (state) => {
  const response = await axios.get(`https://rickandmortyapi.com/api/character`);
  state(response);
  
};


export { allCharacters};