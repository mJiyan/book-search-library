import { useSelector } from 'react-redux';

import { RootStore } from "src/Store";
import { Maybe } from 'src/types';
import { BookSearchResultType } from "src/redux/actions/Book/types";
import { setBookSearchResultToStorage, getBookSearchResultFromStorage } from "src/shared/storage";

const useGetSearchBookState = (): Maybe<BookSearchResultType> => {
    const { books } = useSelector((state: RootStore) => state.book);
    setBookSearchResultToStorage(books);

    const searchBookStateFromStorage = getBookSearchResultFromStorage();

    return searchBookStateFromStorage;
}

export default useGetSearchBookState;
