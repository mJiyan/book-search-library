import { Link } from "react-router-dom";

import { HeaderBox, HeaderWrapper, HeaderTitle } from "src/ui-library";

import { useSearchBooks } from "./hooks";
import { SearchBox } from "./components"

export type HeaderProps = {
    title?: string
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const { handleChange } = useSearchBooks();

    return (
        <HeaderWrapper>
            <HeaderBox>
                <HeaderTitle>
                    <Link to="/">
                        {title}
                    </Link>
                </HeaderTitle>
                <SearchBox onSubmitValue={handleChange} />
            </HeaderBox>
        </HeaderWrapper>
    )
}

export default Header;
