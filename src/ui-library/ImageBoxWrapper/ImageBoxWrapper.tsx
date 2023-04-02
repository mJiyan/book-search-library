import { UIComponentProp } from "src/types";

const ImageBoxWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex flex-col items-center justify-center pr-8 pl-4 my-4
            xl:h-full lg:h-full md:h-full sm:h-full xs:h-full
            xl:w-full lg:w-full md:w-full sm:w-full xs:w-full
            ${props}
        `}
    >
        {children}
    </div>
)

export default ImageBoxWrapper;
