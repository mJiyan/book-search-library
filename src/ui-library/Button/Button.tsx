import { UIComponentProp } from "src/types";

type ButtonProps = UIComponentProp & { type?: "button" | "submit" | "reset" }

const Button: React.FC<ButtonProps> = ({ children, type, props }) => (
    <button
        type={type}
        className={`
            text-WhiteDark right-2.5 bottom-2.5 bg-VeryDarkBlue hover:bg-DarkGray font-medium rounded-lg 
            text-tiny px-4 py-2 ${props}
        `}
    >
        {children}
    </button>
)
export default Button;
