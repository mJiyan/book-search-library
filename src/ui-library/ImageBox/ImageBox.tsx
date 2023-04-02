import { UIComponentProp } from "src/types";

const ImageBox: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex items-center justify-center overflow-hidden relative rounded
            xl:h-56 lg:h-56 md:h-56 sm:h-28 xs:h-28
            xl:w-40 lg:w-40 md:w-40 sm:w-24 xs:w-24 
            ${props}
        `}
    >
        {children}
    </div>
)

export default ImageBox;
