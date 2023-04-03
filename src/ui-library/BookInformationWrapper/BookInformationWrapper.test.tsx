import {
    render,
    screen,
} from "@testing-library/react";

import BookInformationWrapper from "./BookInformationWrapper";

describe(BookInformationWrapper.name, () => {
    it("should render the component as expected ", () => {
        render(<BookInformationWrapper>BookInformationWrapper content</BookInformationWrapper>)
        expect(screen.getByText("BookInformationWrapper content")).toBeTruthy();
    })
})
