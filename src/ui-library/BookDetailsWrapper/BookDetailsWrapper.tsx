import { UIComponentProp } from "src/types";

const BookDetailsWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex justify-around items-center
            xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col
            xl:h-3/4 lg:h-3/4 md:h-auto sm:h-auto xs:h-auto
            xl:w-1/2 lg:w-1/2 md:w-5/6 sm:w-5/6 xs:w-5/6
            m-auto rounded-lg shadow-xl ${props}
        `}
    >
        {children}
    </div>
)

export default BookDetailsWrapper;
