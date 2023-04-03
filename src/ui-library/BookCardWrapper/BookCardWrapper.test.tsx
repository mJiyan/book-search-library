import {
    render,
    screen,
} from "@testing-library/react";

import BookCardWrapper from "./BookCardWrapper";

describe(BookCardWrapper.name, () => {
    it("should render the component as expected ", () => {
        render(<BookCardWrapper>BookCardWrapper content</BookCardWrapper>)
        expect(screen.getByText("BookCardWrapper content")).toBeTruthy();
    })
})
