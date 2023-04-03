import React from 'react';
import { renderHook } from "@testing-library/react"

import { REDUX_STATE_MOCK, BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK } from 'src/mock';
import * as booksStorage from 'src/shared/storage';

import useGetBookDetails from "./useGetBookDetails"


jest.mock('react-redux', () => ({
    useSelector: () => (REDUX_STATE_MOCK),
    useDispatch: jest.fn()
}));

describe(useGetBookDetails.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should get selected book details after found a match using keys", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();
        const booksStorageSpy = jest.spyOn(booksStorage, "getBookSearchResultFromStorage").mockReturnValueOnce(BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK);

        const { result: { current } } = renderHook(() => useGetBookDetails({ worksParameter: "" }))

        expect(current).toEqual({
            title: 'The most dangerous game',
            author: 'Richard Connell',
            description: '',
            coverImage: '',
            publishDate: ''
        })
        expect(useRefSpy).toHaveBeenCalledTimes(1)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
        expect(booksStorageSpy).toHaveBeenCalledTimes(1)
    })


    it("should return empty object when there is not any match between keys", () => {
        const useRefSpy = jest.spyOn(React, 'useRef').mockReturnValueOnce({ current: null });
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();
        const BOOK_SEARCH_RESULT_WITHOUT_SELECTED_ITEM = [...BOOK_SEARCH_RESULT_LOCAL_STORAGE_MOCK.slice(4)];

        const booksStorageSpy = jest.spyOn(booksStorage, "getBookSearchResultFromStorage").mockReturnValueOnce(BOOK_SEARCH_RESULT_WITHOUT_SELECTED_ITEM);

        const { result: { current } } = renderHook(() => useGetBookDetails({ worksParameter: "" }))

        expect(current).toEqual({})
        expect(useRefSpy).toHaveBeenCalledTimes(1)
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
        expect(booksStorageSpy).toHaveBeenCalledTimes(1)
    })
});
