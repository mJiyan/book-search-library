import {
    render,
    screen,
} from "@testing-library/react";

import BookListWrapper from "./BookListWrapper";

describe(BookListWrapper.name, () => {
    it("should render the component as expected ", () => {
        render(<BookListWrapper>BookListWrapper content</BookListWrapper>)
        expect(screen.getByText("BookListWrapper content")).toBeTruthy();
    })
})
