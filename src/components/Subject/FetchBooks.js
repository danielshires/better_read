// fetcher.js
let cache = null;

export default function FetchBooks(id) {
  if (!cache) {
    cache = fetch(`https://openlibrary.org/works/${id}.json`);
  } 

  return cache;
}
