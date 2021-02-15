

import countriesName from '../templates/country.hbs';
import {countryContainer} from './refs'
import countryName from '../templates/countryItem.hbs';
import { defaults, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/BrightTheme.css';



defaults.delay = 1000;

function updateCountryList(data) {

    const markuplist = countriesName(data);
    const markup = countryName(data);
    if (data.status === 404) { 
        return error({
      text: 'Unfortunately the country name you entered is not correct!',
    });
    }
    if (data.length === 1) {
       success({
      text: ' Your query is correct!',
    });
   countryContainer.insertAdjacentHTML('beforeend', markup);
   
    }
     if (data.length > 2 && data.length <= 10) {
countryContainer.insertAdjacentHTML('beforeend', markuplist );
    info({
      text: 'Please specify the query!',
    });
  }
    if (data.length > 10) {
          error({
      text: 'Please enter a more specific query!',
    });
   countryContainer.insertAdjacentHTML('beforeend', markuplist );
     }
    

}
export default updateCountryList;