import {
    render,
    screen,
} from "@testing-library/react";

import ImageBox from "./ImageBox";

describe(ImageBox.name, () => {
    it("should render the component as expected ", () => {
        render(<ImageBox>ImageBox content</ImageBox>)
        expect(screen.getByText("ImageBox content")).toBeTruthy();
    })
})
