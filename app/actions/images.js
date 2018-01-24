import { API_ENDPOINT } from '../config/api';
import Config from 'react-native-config';

const setFeaturedImages = images => ({
  type: 'SET_FEATURED_IMAGES',
  images
})

const setImages = images => ({
  type: 'SET_IMAGES',
  images
})

const setFields = fields => ({
  type: 'SET_FIELDS',
  fields
})

export const fetchFeaturedImages = () => dispatch => {
  fetch(`${API_ENDPOINT}/projects?api_key=${Config.BEHANCE_API_KEY}`, {})
    .then(response => {
      dispatch(setFeaturedImages(JSON.parse(response._bodyInit).projects.slice(0, 8)));
    });
}

export const fetchFields = () => dispatch => {
  fetch(`${API_ENDPOINT}/fields?api_key=${Config.BEHANCE_API_KEY}`, {})
    .then(response => {
      dispatch(setFields(JSON.parse(response._bodyInit).fields.map(f => f.name).slice(0, 8)));
    });
}

export const fetchImages = (key, query) => dispatch => {
  fetch(`${API_ENDPOINT}/projects?api_key=${Config.BEHANCE_API_KEY}&${query}`, {})
    .then(response => {
      dispatch(setImages({
        [key]: JSON.parse(response._bodyInit).projects.slice(0, 20)
      }));
    });
}
