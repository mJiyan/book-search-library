import { REDUX_STATE_MOCK } from 'src/mock';

import storeAndReturnSearchBookState from "./storeAndReturnSearchBookState"


jest.mock('react-redux', () => ({
    useSelector: () => (REDUX_STATE_MOCK),
}));

jest.mock('src/shared/storage', () => ({
    setBookSearchResultToStorage: jest.fn(),
}));

describe(storeAndReturnSearchBookState.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should save redux state to storage and return it", () => {
        const result = storeAndReturnSearchBookState()

        expect(result).toEqual(REDUX_STATE_MOCK.books)
    })
});
