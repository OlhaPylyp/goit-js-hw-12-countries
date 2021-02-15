
function fetchCountries(searchCountry) {
    const url = `https://restcountries.eu/rest/v2/name/${searchCountry}`
    return fetch(url).then(response => response.json()).then(data => data)
        .catch((err) => {
            console.warn(err)
        })
      ;
}
export default fetchCountries ;


