import { Maybe, } from "src/types";
import { BookSearchResultType } from "src/redux/actions/Book/types";


const BOOK_SEARCH_RESULT_STORAGE_KEY = "books"

export const getBookSearchResultFromStorage = (): Maybe<BookSearchResultType> => {
    const bookSearchResultJSON = localStorage.getItem(BOOK_SEARCH_RESULT_STORAGE_KEY);
    if (bookSearchResultJSON) {
        try {
            return JSON.parse(bookSearchResultJSON);
        } catch (e) {
            return null
        }
    }
    return null
}

export const setBookSearchResultToStorage = (bookSearchResult: Maybe<BookSearchResultType>): void => {
    try {
        if (bookSearchResult?.length) {
            localStorage.setItem(BOOK_SEARCH_RESULT_STORAGE_KEY, JSON.stringify(bookSearchResult));
        }
    } catch (e) {
        console.log(e);
    }
}
