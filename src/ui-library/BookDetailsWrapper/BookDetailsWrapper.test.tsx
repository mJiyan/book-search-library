import {
    render,
    screen,
} from "@testing-library/react";

import BookDetailsWrapper from "./BookDetailsWrapper";

describe(BookDetailsWrapper.name, () => {
    it("should render the component as expected ", () => {
        render(<BookDetailsWrapper>BookDetailsWrapper content</BookDetailsWrapper>)
        expect(screen.getByText("BookDetailsWrapper content")).toBeTruthy();
    })
})
