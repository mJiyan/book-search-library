import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { RootStore } from "src/Store";
import { getBookDetails } from "src/redux/actions";
import { getBookSearchResultFromStorage } from "src/shared/storage";

import { selectors } from "./selectors";


const useGetBookDetails = (worksParameter: string) => {
    const loading = useRef(false);

    const dispatch = useDispatch();

    const bookSelect = useSelector((state: RootStore) => state.book);
    useEffect(() => {
        dispatch(getBookDetails(worksParameter));
        loading.current = bookSelect.loading;
    }, [worksParameter, loading.current]);

    const books = getBookSearchResultFromStorage();
    const selectorsResult = selectors({ book: bookSelect.book, books: books })

    return {
        title: selectorsResult?.title,
        author: selectorsResult?.author,
        description: selectorsResult?.description,
        coverImage: selectorsResult?.coverImage,
        publishDate: selectorsResult?.publishDate,
    }
}

export default useGetBookDetails;
