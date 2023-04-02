import {
    SearchBookDispatchTypes,
    GetBookDispatchTypes,
    SEARCH_BOOKS_FAIL,
    SEARCH_BOOKS_SUCCESS,
    SEARCH_BOOKS_LOADING,
    GET_BOOK_FAIL,
    GET_BOOK_LOADING,
    GET_BOOK_SUCCESS,
    BookDetailsResultType,
    BookSearchResultType
} from "src/redux/actions/Book/types";

export interface DefaultState {
    loading: boolean;
    error?: boolean;
    errorMessage?: string;
    books?: BookSearchResultType,
    book?: BookDetailsResultType,
}

const defaultState: DefaultState = {
    loading: false,
    error: false,
}

type BookDispatchType = SearchBookDispatchTypes | GetBookDispatchTypes


const bookReducer = (
    state: DefaultState = defaultState,
    action: BookDispatchType
): DefaultState => {
    switch (action.type) {
        case SEARCH_BOOKS_LOADING:
            return {
                ...state,
                loading: true,
            }
        case SEARCH_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: action.payload,
            }
        case SEARCH_BOOKS_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                error: true,
            }
        case GET_BOOK_LOADING:
            return {
                ...state,
                loading: true,
            }
        case GET_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                book: action.payload,
            }
        case GET_BOOK_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                error: true,
            }
        default:
            return state;
    }
}

export default bookReducer;
