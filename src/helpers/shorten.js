export const titleShorten = (title) => {
  const splitedTitle = title.split(" ");
  const newTitle = `${splitedTitle[0]} ${splitedTitle[1]} ${splitedTitle[2]}`;
  return newTitle;
};

export const descriptionShorten = (description) => {
    const  shorterDescription = description.substring(0, 100) + "...";
    return shorterDescription
};
