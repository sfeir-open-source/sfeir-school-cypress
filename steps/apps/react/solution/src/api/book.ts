const API = process.env.NX_API_URL_BOOKS || 'http://localhost:3333/api';

export interface BookDTO {
  id: string;
  title: string;
  author: string;
  price: number;
  imageUrl: string;
}

export interface PageDTO {
  isFirst: boolean;
  isLast: boolean;
  page: number;
  itemsPerPage: number;
  content: BookDTO[];
}

export async function findBooks(genre: string, page = 1, pageSize = 10): Promise<PageDTO> {
  return fetch(`${API}/books?genre=${genre}&pageSize=${pageSize}&page=${page}`).then(res => res.json());
}

export async function findTop10Books(): Promise<BookDTO[]> {
  return fetch(`${API}/books/top10`).then(res => res.json());
}

export interface GenreDTO {
  label: string;
  query: string;
}

export async function findGenres(): Promise<GenreDTO[]> {
  return fetch(`${API}/books/genres`).then(res => res.json());
}
