import { request } from "../tools/request";

export const getCountries = async () => {
    const optionsRequest = {
        method: "GET",
        url: "https://restcountries.com/v3.1/all" 
    };
    return await request(optionsRequest)
}
// Probé esta API, pero la descarte