const imageUrlParser = (id: string, option: string = "") => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;
  return `${baseUrl}${id}${option ? option + "/" : ""}`;
};

export default imageUrlParser;
