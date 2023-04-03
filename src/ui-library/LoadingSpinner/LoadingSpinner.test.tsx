import {
    render,
    screen,
} from "@testing-library/react";

import LoadingSpinner, { LOAING_SPINNER_TESTID } from "./LoadingSpinner";

describe(LoadingSpinner.name, () => {
    it("should render the component as expected ", () => {
        render(<LoadingSpinner />)
        expect(screen.getByTestId(LOAING_SPINNER_TESTID)).toBeTruthy();
    })
})
