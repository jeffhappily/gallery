// select image with highest definition that behance returns
export const selectImage = covers => {
  const keys = Object.keys(covers);

  // return the highest definition other than original
  return covers[keys[keys.length - 2]]
}
