import debounce from 'lodash/debounce';
import { inputRef, countryContainer } from './refs'
import fetchCountries from './fetchCountries';
import updateCountryList from './updateCountry';

inputRef.addEventListener('input', debounce(searchCountries, 500));
function searchCountries(event) {
    const searchCountry = event.target.value;
    countryContainer.innerHTML = '';
    if (searchCountry !== '') {
        return fetchCountries(searchCountry ).then(updateCountryList);
    }
        

}


