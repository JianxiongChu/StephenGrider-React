import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 0TUc2VwY7S4WkgfFmizkOP53rbQXMXfAr-387adzqWw',
    },
    params: {
      query: term,
    },
  });

  console.log(response);

  return response.data.results;
};

export default searchImages;
