import {
    render,
    screen,
} from "@testing-library/react";

import ImageBoxWrapper from "./ImageBoxWrapper";

describe(ImageBoxWrapper.name, () => {
    it("should render the component as expected ", () => {
        render(<ImageBoxWrapper>ImageBoxWrapper content</ImageBoxWrapper>)
        expect(screen.getByText("ImageBoxWrapper content")).toBeTruthy();
    })
})
