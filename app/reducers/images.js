const initialState = {
  featured: []
}
const images = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FEATURED_IMAGES":
      return {
        ...state,
        featured: action.images
      }
      break;
    default:
      return state;
  }
}

export default images;
