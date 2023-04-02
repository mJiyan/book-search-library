import { UIComponentProp } from "src/types";

const BookInformationWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex flex-col justify-center p-8
            xl:h-full lg:h-full md:h-full sm:h-full xs:h-full
            xl:w-full lg:w-full md:w-full sm:w-full xs:w-full ${props}
        `}
    >
        {children}
    </div>
)

export default BookInformationWrapper;
