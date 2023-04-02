import { Field } from 'formik';


type InputProps = {
    type?: string
    id?: string
    name?: string
}

const Input: React.FC<InputProps> = ({ type, name, id }) => (
    <Field
        id={id}
        type={type}
        name={name}
        className="block w-full p-4 pl-10 text-tiny text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search books..."
    />
)
export default Input;
