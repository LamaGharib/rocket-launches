export const fetchData = async (url) => {
  try {
    const data = await fetch(url);
    const allData = await data.json();
    return allData;
  } catch {
    (error) => error.message;
  }
};
