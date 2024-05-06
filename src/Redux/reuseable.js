export const save = async (key, value) => {
  //save in local storage
  localStorage.setItem(key, value);
};

export const get = async (key) => {
  //get from local storage
  return localStorage.getItem(key);
};

export const remove = async (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.log("Error in removing data from secure storage: ", error);
  }
};
