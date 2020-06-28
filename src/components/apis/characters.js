import axios from "axios"

const API_URL = "https://rickandmortyapi.com/api"

export const getCharacters = async () =>  {
    const response = await axios.get(`${API_URL}/character`)
    const results = response.data.results
    console.log(results)

    return results
}