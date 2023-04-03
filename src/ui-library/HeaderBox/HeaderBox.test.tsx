import {
    render,
    screen,
} from "@testing-library/react";

import HeaderBox from "./HeaderBox";

describe(HeaderBox.name, () => {
    it("should render the component as expected ", () => {
        render(<HeaderBox>HeaderBox content</HeaderBox>)
        expect(screen.getByText("HeaderBox content")).toBeTruthy();
    })
})
