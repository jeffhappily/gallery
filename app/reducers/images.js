const initialState = {
  fields: [],
  featured: []
};

const images = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEATURED_IMAGES":
      return {
        ...state,
        featured: action.images
      }
      break;
    case "SET_IMAGES":
      return {
        ...state,
        ...action.images
      }
      break;
    case "SET_FIELDS":
      return {
        ...state,
        fields: action.fields
      }
      break;
    default:
      return state;
  }
};

export default images;
