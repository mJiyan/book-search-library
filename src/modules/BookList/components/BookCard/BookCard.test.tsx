import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import BookCard, { BookCardType } from './BookCard'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({
    bookKey, coverImage, title
}: BookCardType) => renderWithProviders(
    <BookCard
        bookKey={bookKey}
        coverImage={coverImage}
        title={title}
    />, [withRedux(store, history)])

describe(BookCard.name, () => {
    it("should render the component as expected", () => {
        setUp({
            bookKey: "/works/OL5278311W",
            coverImage: "coverImage",
            title: "Richard Connell"
        })
        expect(screen.queryByText("Richard Connell")).toBeInTheDocument()
        expect(screen.queryByAltText("coverImage")).toBeInTheDocument()
    })

    it("should not render when data is not exist", () => {
        setUp({})
        expect(screen.queryByText("Richard Connell")).not.toBeInTheDocument()
        expect(screen.getByText("--Title is not available--")).toBeInTheDocument()

        expect(screen.queryByAltText("coverImage")).not.toBeInTheDocument()
    })

})
