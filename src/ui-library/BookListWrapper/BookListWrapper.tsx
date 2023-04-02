import { UIComponentProp } from "src/types";

const BookListWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            grid gap-4
            place-items-center
            xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2
            xl:p-10 lg:p-10 md:p-10 sm:p-4 xs:p-4 ${props}
        `}
    >
        {children}
    </div>
)

export default BookListWrapper;
