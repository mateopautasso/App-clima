// Deps
import axios from "axios"

export const request = async (options) => {
    return await axios.request(options).then(response => response.data).catch(error => error)
}