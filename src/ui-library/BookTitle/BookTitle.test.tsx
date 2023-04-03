import {
    render,
    screen,
} from "@testing-library/react";

import BookTitle from "./BookTitle";

describe(BookTitle.name, () => {
    it("should render the component as expected ", () => {
        render(<BookTitle>BookTitle content</BookTitle>)
        expect(screen.getByText("BookTitle content")).toBeTruthy();
    })
})
