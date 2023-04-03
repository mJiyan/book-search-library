import {
    render,
    screen,
} from "@testing-library/react";

import FullPageBox from "./FullPageBox";

describe(FullPageBox.name, () => {
    it("should render the component as expected ", () => {
        render(<FullPageBox>FullPageBox content</FullPageBox>)
        expect(screen.getByText("FullPageBox content")).toBeTruthy();
    })
})
