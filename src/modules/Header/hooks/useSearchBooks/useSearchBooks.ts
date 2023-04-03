import { FormikHelpers } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { searchBooks } from "src/redux/actions";
import { useHistory } from "react-router-dom";

type HandleChangeProps = (values: { search: string; }, formikHelpers?: FormikHelpers<{ search: string; }>) => void | Promise<any>

const useSearchBooks = () => {
    const [searchParameter, setSearchParameter] = useState<string>("");
    const history = useHistory();

    const dispatch = useDispatch();

    const handleChange: HandleChangeProps = async (event) => {
        setSearchParameter(event.search)
        history.push("/");
    }

    useEffect(() => {
        dispatch(searchBooks({ searchParameter }));
    }, [searchParameter]);

    return {
        handleChange,
    }
}

export default useSearchBooks;
