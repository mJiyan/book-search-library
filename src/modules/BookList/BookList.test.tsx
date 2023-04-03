import '@testing-library/jest-dom'
import { screen } from "@testing-library/react"

import { Maybe } from 'src/types';
import { renderWithProviders, withRedux, getReduxMockProviderParameters } from 'src/shared/tests';
import { REDUX_STATE_MOCK } from 'src/mock';
import { BookSearchResultType } from 'src/redux/actions/Book/types';

import BookList from './BookList'


const { store, history } = getReduxMockProviderParameters({ mock: REDUX_STATE_MOCK })

const setUp = ({
  books
}: { books: Maybe<BookSearchResultType> }) => renderWithProviders(
  <BookList
    books={books}
  />, [withRedux(store, history)])

describe(BookList.name, () => {
  it("should render the component as expected", () => {
    setUp({
      books: REDUX_STATE_MOCK.books
    })
    expect(screen.queryByText("The most dangerous game")).toBeInTheDocument()
    expect(screen.queryByAltText("coverImage")).toBeInTheDocument()
  })

  it("should render the alternative texts when data is not exist", () => {
    setUp({ books: null })
    expect(screen.getByText("Search books")).toBeInTheDocument()
  })

})
