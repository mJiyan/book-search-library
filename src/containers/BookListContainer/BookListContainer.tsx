import { FunctionComponent } from "react"

import { BookList } from "src/modules";
import { useGetSearchBookState } from "./hooks";

const BookListContainer: FunctionComponent = () => {
    const books = useGetSearchBookState()
    return <BookList books={books} />
}

export default BookListContainer
