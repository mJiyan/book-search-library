import { UIComponentProp } from "src/types";

type ButtonProps = UIComponentProp & { type?: "button" | "submit" | "reset" }

const Button: React.FC<ButtonProps> = ({ children, type, props }) => (
    <button
        type={type}
        className={`text-WhiteDark absolute right-2.5 bottom-2.5 bg-VeryDarkBlue hover:bg-DarkGray focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-tiny px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${props}`}
    >
        {children}
    </button>
)
export default Button;
