import { IPost } from '@interfaces/post/i-post';

export const fetchPosts = async (id?: string | number): Promise<IPost[]> => {
  let URL = 'https://jsonplaceholder.typicode.com/posts';

  if (id) {
    URL += `?userId=${id}`;
  }

  return fetch(URL).then((value) => value.json());
};
