import { UIComponentProp } from "src/types";

const FullPageBox: React.FC<UIComponentProp> = ({ props, children }) => (
    <div className={`flex flex-grow h-full w-full justify-center items-center absolute ${props}`}>
        {children}
    </div>
)

export default FullPageBox;
