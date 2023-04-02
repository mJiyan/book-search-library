import { UIComponentProp } from "src/types";

const HeaderWrapper: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className=
        {`
            flex
            items-center
            xl:h-20 lg:h-20 md:h-20 sm:h-32 xs:h-32
            bg-WhiteDark shadow-md ${props}
        `}
    >
        {children}
    </div>
)

export default HeaderWrapper;
