import { UIComponentProp } from "src/types";

const HeaderBox: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex items-center
            xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col
            xl:justify-between lg:justify-between md:justify-between sm:justify-center xs:justify-center
            py-10 h-20 w-full xl:px-20 lg:px-20 md:px-20 sm:px-5 xs:px-3 ${props}
        `}
    >
        {children}
    </div>
)

export default HeaderBox;
