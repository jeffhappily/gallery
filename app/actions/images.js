import { API_ENDPOINT } from '../config/api';
import Config from 'react-native-config';

const setFeaturedImages = images => ({
  type: 'SET_FEATURED_IMAGES',
  images
})

export const fetchFeaturedImages = () => dispatch => {
  fetch(`${API_ENDPOINT}/projects?api_key=${Config.BEHANCE_API_KEY}`, {})
    .then(response => {
      dispatch(setFeaturedImages(JSON.parse(response._bodyInit).projects.slice(0, 8)));
    });
}
