import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  baseURL: 'https://grades-back3.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
