import { API_URL, API_KEY } from '../constants';

const fetchItem = async id => {
  console.log(id);
  const url = `${API_URL}/events/${id}.json?apikey=${API_KEY}`;
  const response = await fetch(url);
  return response.json();
};

export default fetchItem;
