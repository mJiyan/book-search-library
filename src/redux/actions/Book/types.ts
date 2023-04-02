import { BookType } from "src/types";

export const GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS';
export const GET_BOOK_FAIL = 'GET_BOOK_FAIL';
export const GET_BOOK_LOADING = 'GET_BOOK_LOADING';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAIL = 'SEARCH_BOOKS_FAIL';
export const SEARCH_BOOKS_LOADING = 'SEARCH_BOOKS_LOADING';

export type BookDetailsResultType = BookType
export type BookSearchResultType = Omit<BookType, "description" | "publishDate">[]

interface GetBookSuccess {
    type: typeof GET_BOOK_SUCCESS,
    payload: BookType
}

interface GetBookFail {
    type: typeof GET_BOOK_FAIL,
    payload: string

}

interface GetBookLoading {
    type: typeof GET_BOOK_LOADING;
}


interface SearchBookSuccess {
    type: typeof SEARCH_BOOKS_SUCCESS,
    payload: BookSearchResultType
}

interface SearchBookFail {
    type: typeof SEARCH_BOOKS_FAIL,
    payload: string
}

interface SearchBookLoading {
    type: typeof SEARCH_BOOKS_LOADING,
}

export type GetBookDispatchTypes = GetBookSuccess | GetBookFail | GetBookLoading
export type SearchBookDispatchTypes = SearchBookSuccess | SearchBookFail | SearchBookLoading

