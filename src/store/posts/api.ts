export const fetchPosts = async (id?: string | number): Promise<any[]> => {
  let URL = 'https://jsonplaceholder.typicode.com/posts';

  if (id) {
    URL += `?userId=${id}`;
  }

  return fetch(URL).then((value) => value.json());
};
