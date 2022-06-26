const story = (path: string, page:string) => `https://node-hnapi.herokuapp.com/${path}?page=${page}`;
const user = (path: string) =>
  `https://hacker-news.firebaseio.com/v0/${path}.json`;

export default function fetchAPI(path: string, page:string) {
  const url = story(path, page);
  const headers = { "User-Agent": "chrome" };

  return fetch(url, { headers }).then((r) => r.json());
}
