import { REDUX_STATE_MOCK, BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK } from 'src/mock';

import { selectors } from "./selectors"

describe(selectors.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return book details after found a match between keys", () => {
        const result = selectors({ book: REDUX_STATE_MOCK.book, books: BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK })

        expect(result).toEqual({
            title: 'The most dangerous game',
            author: 'Richard Connell',
            description: '',
            coverImage: '',
            publishDate: ''
        })
    })

    it("should return undefined when there is not any match between keys", () => {
        const BOOK_SEARCH_RESULT_WITHOUT_SELECTED_ITEM = [...BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK.slice(4)];
        const result = selectors({ book: REDUX_STATE_MOCK.book, books: BOOK_SEARCH_RESULT_WITHOUT_SELECTED_ITEM })

        expect(result).toEqual(undefined)
    })
});
