import { request } from "../tools/request";

export const getCities = async (countryCode) => {
    const optionsRequest = {
        method: 'GET',
        url: 'https://cors-anywhere.herokuapp.com/http://api.geonames.org/searchJSON',
        params: {
            country: countryCode ?? 'AR',
            maxRows: 1000,
            username: 'matupau'
        }
    }
    return await request(optionsRequest)
}
// Probé esta API, pero la descarte