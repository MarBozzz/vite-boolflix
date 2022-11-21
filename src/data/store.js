
import { reactive } from "vue";

export const store = reactive({
  apiUrl : 'https://api.themoviedb.org/3/search/',
  movieList : [],
  titleToSearch: 'pulp+fiction',
  apiKey : '?api_key=d18b4066572abd6df624614e95914560',
  query : '&query=',
});