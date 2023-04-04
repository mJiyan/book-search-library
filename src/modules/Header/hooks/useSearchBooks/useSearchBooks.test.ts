import React from 'react';
import { renderHook } from "@testing-library/react"
import { wait } from 'src/shared/tests/';

import useSearchBooks from "./useSearchBooks"


jest.mock('react-redux', () => ({
    useDispatch: jest.fn()
}));

jest.mock('react-router-dom', () => ({
    useHistory: () => ({ push: jest.fn() }),
}))

describe(useSearchBooks.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should return a function to enable redux call for getting books from API with search parameter", async () => {
        const useEffectSpy = jest.spyOn(React, 'useEffect').mockReturnValueOnce();

        renderHook(() => useSearchBooks())

        await wait(1000)

        // expect(current.handleChange({ search: "event" })).toEqual({})
        expect(useEffectSpy).toHaveBeenCalledTimes(1)
    })
});
