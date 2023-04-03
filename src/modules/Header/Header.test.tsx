import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import Header, { HeaderProps } from './Header'

jest.mock('./hooks', () => ({
    useSearchBooks: () => ({}),
}));

const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({ title }: HeaderProps) => renderWithProviders(<Header title={title} />, [withRedux(store, history)])

describe(Header.name, () => {
    it("should render the component as expected", () => {
        setUp({ title: "Search books" })
        expect(screen.queryByText("Search books")).toBeInTheDocument()
    })
})
