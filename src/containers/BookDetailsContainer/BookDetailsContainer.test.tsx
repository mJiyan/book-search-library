import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import BookDetailsContainer, { BookDetailsContainerProps } from './BookDetailsContainer'

jest.mock('./hooks', () => ({
    useGetBookDetails: () => ({
        title: 'The most dangerous game',
        author: 'Richard Connell',
        description: '',
        coverImage: '',
        publishDate: ''
    }),
}));

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ match: {
    params
} }: BookDetailsContainerProps) => renderWithProviders(<BookDetailsContainer match={{ params }} />, [withRedux(store, history)])

describe(BookDetailsContainer.name, () => {
    it("should render container as expected", () => {
        setUp({
            match: { params: { worksParameter: "" } }
        })
        expect(screen.queryByText("Richard Connell")).toBeInTheDocument()
    })
})
