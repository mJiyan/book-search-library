import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import * as storeAndReturnSearchBookState from './utils';
import BookListContainer from './BookListContainer'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = () => renderWithProviders(<BookListContainer />, [withRedux(store, history)])

describe(BookListContainer.name, () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("should render book list component", () => {
        const storeAndReturnSearchBookStateSpy = jest.spyOn(storeAndReturnSearchBookState, 'storeAndReturnSearchBookState').mockReturnValueOnce(REDUX_STATE_MOCK.books);
        setUp()
        expect(screen.queryByText("The most dangerous game")).toBeInTheDocument()
        expect(storeAndReturnSearchBookStateSpy).toHaveBeenCalledTimes(1)
    })

    it("should render blank page component", () => {
        const storeAndReturnSearchBookStateSpy = jest.spyOn(storeAndReturnSearchBookState, 'storeAndReturnSearchBookState').mockReturnValueOnce(null);
        setUp()
        expect(screen.queryByText("Search books")).toBeInTheDocument()
        expect(storeAndReturnSearchBookStateSpy).toHaveBeenCalledTimes(1)
    })
})
