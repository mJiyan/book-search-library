import { useSelector } from 'react-redux';

import { RootStore } from "src/Store";
import { Maybe } from 'src/types';
import { BookSearchResultType } from "src/redux/actions/Book/types";
import { setBookSearchResultToStorage } from "src/shared/storage";

const storeAndReturnSearchBookState = (): Maybe<BookSearchResultType> => {
    const { books } = useSelector((state: RootStore) => state.book);

    setBookSearchResultToStorage(books);

    return books;
}

export default storeAndReturnSearchBookState;
