import { UIComponentProp } from "src/types";

const BookCardWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            xl:w-40 lg:w-40 md:w-40 sm:w-24 xs:w-24 ${props}
        `}
    >
        {children}
    </div>
)

export default BookCardWrapper;
