const API = process.env.NX_API_URL_BOOKS || 'http://localhost:3333/api'

export interface BookDTO {
    id: string;
    title : string;
    author: string;
    price: number;
    imageUrl: string;
}

export async function findBooks (genre: string): Promise<BookDTO[]> {
  return fetch(`${API}/books?genre=${genre}&pageSize=10&page=1`, { mode: 'cors' })
    .then(res => res.json())
    .then(({ content }) => content)
}

export async function findTop10Books () : Promise<BookDTO[]> {
  return fetch(`${API}/books/top10`)
    .then(res => res.json())
}

export interface GenreDTO {
  label: string,
  query: string
}

export async function findGenres (): Promise<GenreDTO[]> {
  return fetch(`${API}/books/genres`, { mode: 'cors' })
    .then(res => res.json())
}
