const API = process.env.NX_API_URL_BOOKS || 'http://localhost:8080'

export interface BookDTO {
    id: string;
    title : string;
    author: string;
    price: number;
    imageUrl: string;
}

export async function findBooks (query: string): Promise<BookDTO[]> {
  return fetch(`${API}/books?query=${query}`)
    .then(res => res.json())
}

export interface GenreDTO {
  label: string,
  query: string
}

export async function findGenres (): Promise<GenreDTO[]> {
  return fetch(`${API}/genres`)
    .then(res => res.json())
}
