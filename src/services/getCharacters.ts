import axios from 'axios';

async function getCharacters(name: string) {
  name = name.trim().toLowerCase();
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    return response.data.results;
  } catch (e) {
    console.log('Character does not exist');
    return [];
  }
}

export default getCharacters;
