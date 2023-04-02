import { UIComponentProp } from "src/types";

const HeaderTitle: React.FC<UIComponentProp> = ({ props, children }) => (
    <p className=
        {
            `
                font-bold 
                xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-tiny
                xl:pb-0 lg:pb-0 md:pb-0 sm:pb-2 xs:pb-2
                ${props}
            `
        }
    >
        {children}
    </p>
)

export default HeaderTitle;
