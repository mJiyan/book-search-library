import { Formik, Form, FormikHelpers } from 'formik';

import { Button, Input, SearchIcon } from "src/ui-library";

export type SearchBoxProps = {
    onSubmitValue: (values: { search: string; }, formikHelpers: FormikHelpers<{ search: string; }>) => void | Promise<any>
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSubmitValue }) => (
    <div className="relative">
        <Formik
            initialValues={{ search: '' }}
            onSubmit={onSubmitValue}
        >
            <Form className='xl:w-96 lg:w-96 md:w-96 sm:w-80 xs:w-80 '>
                <Input id="search" type="search" name="search" />
                <SearchIcon />
                <Button type="submit" props="absolute">
                    Search
                </Button>
            </Form>
        </Formik>
    </div>
)


export default SearchBox;
