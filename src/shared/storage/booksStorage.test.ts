import { BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK } from 'src/mock';

import { getBookSearchResultFromStorage, setBookSearchResultToStorage } from "./booksStorage"

describe("Book localStorage ", () => {
    it("should set and return app state with using localStorage", () => {
        setBookSearchResultToStorage(BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK)
        const result = getBookSearchResultFromStorage()
        expect(result).toEqual(BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK)
    })
});
