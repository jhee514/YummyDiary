export const setWord = (word, tags) => {
  let tagSeries = "";
  tags.forEach((element) => {
    tagSeries += "," + element;
  });
  return word + "&" + tagSeries;
};

export const getWord = (values) => {
  
  let word = values.split("&")[0];
  let tags = values.split("&")[1].split(",");
  tags = tags.slice(1, tags.length);
  return { store_name: word, tags: tags };
};
