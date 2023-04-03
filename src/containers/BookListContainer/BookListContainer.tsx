import { FunctionComponent } from "react"

import { BookList } from "src/modules";

import { storeAndReturnSearchBookState } from "./utils";

const BookListContainer: FunctionComponent = () => {
    const books = storeAndReturnSearchBookState()
    return <BookList books={books} />
}

export default BookListContainer
