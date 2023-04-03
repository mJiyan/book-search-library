import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

import { openLibraryApiCall, HTTP, BOOK_API_END_POINT } from 'src/api';

import {
  SearchBookDispatchTypes,
  GetBookDispatchTypes,
  SEARCH_BOOKS_FAIL,
  SEARCH_BOOKS_SUCCESS,
  SEARCH_BOOKS_LOADING,
  GET_BOOK_FAIL,
  GET_BOOK_LOADING,
  GET_BOOK_SUCCESS,
  BookSearchResultType,
  BookDetailsResultType
} from './types';

export type SearchBookProps = {
  searchParameter: string,
  pageNumber?: string,
}

export const searchBooks = ({ searchParameter = "", pageNumber = "1" }: SearchBookProps) => async (dispatch: Dispatch<SearchBookDispatchTypes>) => {
  try {

    dispatch({ type: SEARCH_BOOKS_LOADING });

    const data: BookSearchResultType = await openLibraryApiCall(
      {
        url: `${BOOK_API_END_POINT}search.json?q=${searchParameter}&page=${pageNumber}`,
        data: null,
        params: null,
        method: HTTP.GET,
        headers: {}
      }
    )
      .then(({ data }) => Object
        .keys(data.docs)
        .map((key) => {
          return {
            title: data.docs[key]?.title,
            key: data.docs[key]?.key,
            author: data.docs[key]?.author_name?.[0],
            coverImage: data.docs[key]?.cover_i,
          };
        })
      )

    dispatch({
      type: SEARCH_BOOKS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const error = e as Error | AxiosError;
    dispatch({
      payload: error.message,
      type: SEARCH_BOOKS_FAIL
    });
  }
};

export type GetBookDetailsProps = {
  worksParameter: string,
}

export const getBookDetails = ({ worksParameter }: GetBookDetailsProps) => async (dispatch: Dispatch<GetBookDispatchTypes>) => {
  try {

    dispatch({ type: GET_BOOK_LOADING });

    const data: BookDetailsResultType = await openLibraryApiCall(
      {
        url: `${BOOK_API_END_POINT}works/${worksParameter}.json`,
        data: null,
        params: null,
        method: HTTP.GET,
        headers: {}
      }
    ).then(({ data }) => ({
      title: data?.title,
      key: data?.key,
      description: data?.description?.value,
      publishDate: data?.first_publish_date,
    }
    ))

    dispatch({
      type: GET_BOOK_SUCCESS,
      payload: data,
    });

  } catch (e) {
    const error = e as Error | AxiosError;
    dispatch({
      payload: error.message,
      type: GET_BOOK_FAIL
    });
  }
};


/**
 *  const data: BookSearchResultType = await openLibraryApiCall(
      {
        url: `${BOOK_API_END_POINT}search.json?q=${searchParameter}&page=${pageNumber}`,
        data: null,
        params: null,
        method: HTTP.GET,
        headers: {}
      }
    )
      .then(({ data }) => {
        const searchBookArray = Object
          .keys(data.docs)
          .map((key) => {
            return {
              title: data.docs[key]?.title,
              key: data.docs[key]?.key,
              author: data.docs[key]?.author_name?.[0],
              coverImage: data.docs[key]?.cover_i,
            };
          })

        const searchBookArrayWithFoundedItemCount = { ...searchBookArray, numFound: data?.numFound };
        return searchBookArrayWithFoundedItemCount;
      })
 */