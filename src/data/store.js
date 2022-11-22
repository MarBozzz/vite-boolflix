
import { reactive } from "vue";

export const store = reactive({
  apiUrl : 'https://api.themoviedb.org/3/search/',
  movie : [],
  tv : [],
  type : '',
  apiParams: {
    api_key : 'd18b4066572abd6df624614e95914560',
    query : '',
    language : 'it-IT'
  },
  titleToSearch: '',
});