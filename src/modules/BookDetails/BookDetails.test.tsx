import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { BookDetailsProps } from "src/types";
import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';

import BookDetails from './BookDetails'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({
    title,
    author,
    description,
    coverImage,
    publishDate,
}: BookDetailsProps) => renderWithProviders(
    <BookDetails
        title={title}
        author={author}
        description={description}
        coverImage={coverImage}
        publishDate={publishDate}
    />, [withRedux(store, history)])

describe(BookDetails.name, () => {
    it("should render the component as expected", () => {
        setUp({
            title: "title data",
            author: "author data",
            description: "description data",
            coverImage: "coverImage data",
            publishDate: "publishDate data"
        })
        expect(screen.queryByText("title data")).toBeInTheDocument()
        expect(screen.queryByText("author data")).toBeInTheDocument()
        expect(screen.queryByText("description data")).toBeInTheDocument()
        expect(screen.queryByAltText("coverImage")).toBeInTheDocument()
        expect(screen.queryByText("publishDate data")).toBeInTheDocument()
    })

    it("should render the alternative texts when data is not exist", () => {
        setUp({})
        expect(screen.queryByText("--Title is not available--")).toBeInTheDocument()
        expect(screen.queryByText("--Author information is not available--")).toBeInTheDocument()
        expect(screen.queryByText("--Description is not available--")).toBeInTheDocument()
        expect(screen.queryByText("Cover image is not available")).toBeInTheDocument()
        expect(screen.queryByText("--Publish date information is not available--")).toBeInTheDocument()
    })

})
