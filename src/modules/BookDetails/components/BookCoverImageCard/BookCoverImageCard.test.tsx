import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import BookCoverImageCard, { BookCoverImageCardProps } from './BookCoverImageCard'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({
    coverImage
}: BookCoverImageCardProps) => renderWithProviders(
    <BookCoverImageCard
        coverImage={coverImage}
    />, [withRedux(store, history)])

describe(BookCoverImageCard.name, () => {
    it("should render the component as expected", () => {
        setUp({
            coverImage: "coverImage",
        })
        expect(screen.queryByAltText("coverImage")).toBeInTheDocument()
    })

    it("should render the alternative texts when data is not exist", () => {
        setUp({})
        expect(screen.queryByText("Cover image is not available")).toBeInTheDocument()
    })

})
